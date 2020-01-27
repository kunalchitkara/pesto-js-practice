const states = require('./states.json');
const accountsData = require('./dataset.json');

let bankBalances = Array.from(accountsData["bankBalances"]);

const bankBalanceMethods = {};
const VALUE_PROPERTY = "amount";
const IDENTIFIER_PROPERTY = "state";

const arrayUtil = {
    greaterThan: function (arr, prop, val) {
        return arr.filter(element => element[prop] > val);
    },
    includeRoundedValues: function (arr, prop) {
        return arr.map(element => ({ ...element, rounded: Math.round(element[prop]) }));
    },
    sumOfProp: function (arr, prop) {
        let sum = 0.00;
        for (let element of arr) {
            sum += Math.round(element[prop] * 100) / 100;
        }
        return Math.round(sum * 100) / 100;
    },
    sumGroups: function (arr, groupBy, prop) {
        let _map = {};
        for (let element of arr) {
            if (!_map[element[groupBy]]) {
                _map[element[groupBy]] = 0.0;
            }
            _map[element[groupBy]] += parseFloat(element[prop]);
        }
        return Object.keys(_map).map(key => ({
            [groupBy]: key,
            [prop]: _map[key]
        }));
    }
}

module.exports = {
    hundredThousandairs: function () {
        return arrayUtil.greaterThan(bankBalances, VALUE_PROPERTY, 100000);
    },
    datasetWithRoundedDollar: function () {
        return arrayUtil.includeRoundedValues(bankBalances, VALUE_PROPERTY);
    },
    sumOfBankBalances: function () {
        return arrayUtil.sumOfProp(bankBalances, VALUE_PROPERTY);
    },
    sumOfInterests: function () {
        var statesToFilter = [
            "Wisconsin",
            "Illinois",
            "Wyoming",
            "Ohio",
            "Georgia",
            "Delaware"
        ];
        var filteredStateCodes = states.filter(s => statesToFilter.includes(s.name)).map(s => s.iso);
        return arrayUtil.sumOfProp(bankBalances.filter(bal => filteredStateCodes.includes(bal[IDENTIFIER_PROPERTY])).map(bal => ({ "interests": bal[VALUE_PROPERTY] * 0.189 })), "interests");
    },
    higherStateSums: function () {
        var balancesGroupedByStates = arrayUtil.sumGroups(bankBalances, IDENTIFIER_PROPERTY, VALUE_PROPERTY);
        var higherStates = arrayUtil.greaterThan(balancesGroupedByStates, VALUE_PROPERTY, 1000000);
        return arrayUtil.sumOfProp(higherStates, VALUE_PROPERTY);
    }
};
