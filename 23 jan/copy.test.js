const copy = require('./copy');

describe('test copy object method', () => {
    it('test blank objects', () => {
        expect(copy({})).toEqual({});
    });

    it('test simpler objects', () => {
        expect(copy({ prop: 1 })).toEqual({ prop: 1 });
        expect(copy({ prop: "hello" })).toEqual({ prop: "hello" });
        expect(copy({ prop1: "hello", prop2: "bye" })).toEqual({ prop1: "hello", prop2: "bye" });
    });

    it('test complex objects', () => {
        expect(copy({
            hello: 3,
            kjhkj: "kasjdhkasj dh",
            kjahskj: {
                kjahsdkjas: "kjashdaskj"
            },
            ajshgdjsa: ["aksjdhasjkd", 34, "kjashd"],
            amsjdhakjs: ["aksjdhasjkd", 34, "kjashd"],
            asjkhdkjas: ["aksjdhasjkd", 34, "kjashd"]
        })).toEqual({
            hello: 3,
            kjhkj: "kasjdhkasj dh",
            kjahskj: {
                kjahsdkjas: "kjashdaskj"
            },
            ajshgdjsa: ["aksjdhasjkd", 34, "kjashd"],
            amsjdhakjs: ["aksjdhasjkd", 34, "kjashd"],
            asjkhdkjas: ["aksjdhasjkd", 34, "kjashd"]
        });
    });
})
