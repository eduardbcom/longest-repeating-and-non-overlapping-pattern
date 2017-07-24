'use strict';

const _ = require('lodash');
const { assert } = require('chai');

const findLongestRepeatedPattern = require('../');

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

    test(tests);
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

    test(tests);
});

describe('Test corner cases', () => {
    it('pass nothing', () => {
        const subpart = findLongestRepeatedPattern();

        assert(subpart === null, 'Error for testing empty param.');
    });

    it('pass empty string', () => {
        const subpart = findLongestRepeatedPattern('');

        assert(subpart === null, 'Error for testing empty string.');
    });

    it('pass empty array', () => {
        const subpart = findLongestRepeatedPattern([]);

        assert(subpart === null, 'Error for testing empty array.');
    });

    it('pass not string/array', () => {
        const subpart1 = findLongestRepeatedPattern(null);
        const subpart2 = findLongestRepeatedPattern({});
        const subpart3 = findLongestRepeatedPattern(123);

        assert(subpart1 === null, 'Error for testing null value.');
        assert(subpart2 === null, 'Error for testing object param.');
        assert(subpart3 === null, 'Error for testing integer param.');
    });
});

function test(tests) {
    tests.forEach(test => {
        it(`test ${test.req} string`, () => {
            const subpart = findLongestRepeatedPattern(test.req);

            assert(_.isEqual(subpart, test.res), `Error for ${test.req} string.`);
        });
    });
}
