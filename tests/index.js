'use strict';

const _ = require('lodash');
const { assert } = require('chai');
const dataDriven = require('data-driven');

const findLongestRepeatedPattern = require('../');

function typeOf(item) {
    return Object.prototype.toString.call(item);
}

const invalidValues = [undefined, null, true, 1, {}, Symbol(), () => {}, Buffer.alloc(0)];

describe('test invalid input params', () => {
    dataDriven(invalidValues.map(value => ({ type: typeOf(value), item: value })), () => {
        it('invalid param with type {type}', ctx => {
            try {
                findLongestRepeatedPattern(ctx.item);
                assert.isFalse(true, 'Should not be here');
            } catch (error) {
                assert.instanceOf(error, Error);

                assert.strictEqual(
                    error.message,
                    'items argument should be an array or string,' + `instead it has ${ctx.type} type`
                );
            }
        });
    });
});

describe('Test longest repeating and non-overlapping sub-string', () => {
    const tests = [
        { req: 'A', res: null },
        { req: 'AA', res: 'A' },
        { req: 'AAA', res: 'A' },
        { req: 'AAAA', res: 'AA' },
        { req: 'AAAAA', res: 'AA' },
        { req: 'AAAAAA', res: 'AAA' },
        { req: 'IPPIPP', res: 'IPP' },
        { req: 'IPPIP', res: 'IP' },
        { req: 'IPPIPPIP', res: 'IPP' }
    ];

    dataDriven(tests, () => {
        it('{req}', ctx => {
            const subpart = findLongestRepeatedPattern(ctx.req);

            assert.strictEqual(subpart, ctx.res, `Error for ${ctx.req} string.`);
        });
    });
});

describe('Test longest repeating and non-overlapping sub-array', () => {
    const tests = [
        { req: 'A', res: null },
        { req: _.times(2, () => 'A'), res: ['A'] },
        { req: _.times(3, () => 'A'), res: ['A'] },
        { req: _.times(4, () => 'A'), res: ['A', 'A'] },
        { req: _.times(5, () => 'A'), res: ['A', 'A'] },
        { req: _.times(6, () => 'A'), res: ['A', 'A', 'A'] }
    ];

    dataDriven(tests, () => {
        it('{req}', ctx => {
            const subpart = findLongestRepeatedPattern(ctx.req);

            assert.deepEqual(subpart, ctx.res, `Error for ${ctx.req} array.`);
        });
    });
});

describe('Test corner cases', () => {
    it('pass empty string', () => {
        const subpart = findLongestRepeatedPattern('');

        assert.isNull(subpart, 'Error for testing empty string.');
    });

    it('pass empty array', () => {
        const subpart = findLongestRepeatedPattern([]);

        assert.isNull(subpart, 'Error for testing empty array.');
    });
});
