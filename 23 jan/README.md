# [Set Default Property](https://www.notion.so/Set-Default-Property-722e79e71d504d208f14f15a81a26408)
describe('setDefaultProperty', () => {
      test('returns the value if known property is accessed', () => {
        const object1 = setDefaultProperty({ foo: 'bar' }, 'defaultValue');
        expect(object1.foo).toBe('bar');
        const object2 = setDefaultProperty({ foo: undefined }, 'defaultValue');
        expect(object2.foo).toBe(undefined);
      });
    
      test('returns the default value if known property is accessed', () => {
        const result = setDefaultProperty({ foo: 'bar' }, 'defaultValue');
        expect(result.bazzz).toBe('defaultValue');
      });
    });

# [Account Dataset](https://www.notion.so/Account-Dataset-e9ebf8bffa9048efa4d934312f0e026d)
This question has 5 sub questions.

The `dataset.json` file should be used in the solution.

[dataset.json](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1560487e-a45e-4a5e-997a-c5e9e1d548c7/dataset.json)

- **hundredThousandairs()**
Return an array with accounts from bankBalances that are
greater than 100000 without using for or while loop
- **datasetWithRoundedDollar()**

    **DO NOT MUTATE DATA.**

    Return a new dataset where each bank object is a new object. `amount` and `state` values will be transferred to the new object. This new object is different, you will add one new key of `rounded`. `rounded` value is `amount` rounded to the nearest dollar.

    Example:

        {
            "amount": "134758.44",
            "state": "HI",
            "rounded": 134758
        }

- **sumOfBankBalances()**
Return the sum of all values held at `amount` for each bank object
- **sumOfInterests()**
From each of the following states:

        Wisconsin,
        Illinois
        Wyoming
        Ohio
        Georgia
        Delaware

    take each `amount` and add 18.9% interest to it rounded to the nearest cent and then sum it all up into one value saved to `sumOfInterests`

- **higherStateSums()**
Aggregate the sum of each state into one hash table. Return the sum of all states with totals greater than 1,000,000

### Use the test cases given below:

    import {
      hundredThousandairs,
      datasetWithRoundedDollar,
      sumOfBankBalances,
      sumOfInterests,
      higherStateSums,
    } from './accountDataset';
    
    describe('accountDataset', () => {
    
      describe('hundredThousandairs', () => {
        it('should return an array with accounts from bankBalances that are greater than 100000', () => {
          expect(hundredThousandairs().length).toBe(93);
          expect(hundredThousandairs().every(account => (account.amount > 100000))).toBe(true);
        });
      });
    
      describe('datasetWithRoundedDollar', () => {
        it('should return an array of accounts with an added key `rounded`', () => {
          expect(datasetWithRoundedDollar().length)
            .toBe(100);
          expect(datasetWithRoundedDollar().every(account => Object.hasOwnProperty.call(account, 'rounded')))
            .toBe(true);
        });
    
        it('each accounts `rounded` value should be rounded to the nearest dollar', () => {
          expect(datasetWithRoundedDollar()[0].rounded)
            .toBe(822371);
          expect(datasetWithRoundedDollar()[7].rounded)
            .toBe(231272);
          expect(datasetWithRoundedDollar()[9].rounded)
            .toBe(683737);
          expect(datasetWithRoundedDollar()[10].rounded)
            .toBe(913216);
          expect(datasetWithRoundedDollar()[99].rounded)
            .toBe(196086);
        });
      });
    
      describe('sumOfBankBalances', () => {
        it('should return the sum of all amounts in bankBalances, rounded to the nearest cent', () => {
          expect(sumOfBankBalances()).toBe(55502603.02);
        });
      });
    
      describe.only('sumOfInterests', () => {
        it('should return the sum the 18.9% interest for all amounts in bankBalances, in the selected states, rounded to the nearest cent', () => {
          expect(sumOfInterests())
            .toBe(2504611.23);
        });
      });
    
      it('should return the sum of all amounts of every state, where the sum of amounts in the state is greater than 1,000,000', () => {
        expect(higherStateSums())
          .toBe(48629878.25);
      });
    });
