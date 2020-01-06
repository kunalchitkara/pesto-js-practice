const util = {
    stockToMap: (stock, map = {}) => {
        if (!Array.isArray(stock))
            throw new Error('Invalid input, array expected!');

        // return the same map if input stock is blank
        if (stock.length === 0)
            return map;

        // append the existing map with new items
        stock.forEach(([quantity, item]) => {
            if (!map[item])
                map[item] = 0;
            map[item] += quantity;
        });
        return map;
    },
    mapToStock: (map, arr = []) => {
        // return stock as it is if input map is empty
        if (Object.keys(map).length === 0)
            return arr;

        Object.keys(map).forEach(key => {
            arr.push([map[key], key]);
        });
        return arr;
    },
    sortArrayOnSecondElement: (arr = []) => {
        return arr.sort((a, b) => a[1] > b[1]);
    }
}

function updateInventory(existingStock, freshStock) {
    const existingMap = util.stockToMap(existingStock);
    const updatedMap = util.stockToMap(freshStock, existingMap)
    const updatedStock = util.mapToStock(updatedMap);
    return util.sortArrayOnSecondElement(updatedStock);
}

module.exports = updateInventory;