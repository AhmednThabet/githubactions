const isOdd = require('../src/isOdd.js');

test.skip('number is not odd', () => {
    expect(isOdd(2)).toBe(false);
    });

test.skip('number is  odd', () => {
        expect(isOdd(3)).toBe(true);
});