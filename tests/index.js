"use strict";

const _ = require('lodash');
const { assert } = require('chai');

const findLongestRepeatedSubpart = require('../');

describe('Test longest repeating and non-overlapping sub-string', () => {

    const tests = [
        { req: 'A', res: null },
        { req: 'AA', res: 'A' },
        { req: 'AAA', res: 'A' },
        { req: 'AAAA', res: 'AA' },
        { req: 'AAAAA', res: 'AA' },
        { req: 'AAAAAA', res: 'AAA' },
        { req: 'IPPIPP', res: 'IPP' },
        { req: 'IPPIPPII', res: 'IPP' }
    ];

    test(tests);

});

describe('Test longest repeating and non-overlapping sub-array', () => {

    const tests = [
        { req: 'A', res: null},
        { req: _.times(2, () => 'A'), res: ['A'] },
        { req: _.times(3, () => 'A'), res: ['A'] },
        { req: _.times(4, () => 'A'), res: ['A', 'A'] },
        { req: _.times(5, () => 'A'), res: ['A', 'A'] },
        { req: _.times(6, () => 'A'), res: _.times(3, () => 'A') },
    ];

    test(tests);

});

describe('Test corner cases', () => {

    it('pass nothing', () => {
    });

    it('pass falsy value', () => {
    });

    it('pass not string/array', () => {
    });

});

function test(tests) {
    tests.forEach(test => {
        it(`test ${test.req} string`, () => {
            const subpart = findLongestRepeatedSubpart(test.req);

            assert(_.isEqual(subpart, test.res), `Error for ${test.req} string.`);
        });
    });
}