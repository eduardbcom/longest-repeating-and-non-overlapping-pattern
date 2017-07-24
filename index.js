'use strict';

const _ = require('lodash');

// This function implements
// http://www.geeksforgeeks.org/longest-repeating-and-non-overlapping-substring/
// Example: 'IPP' === findLongestRepeatedSubstring('IPPIPPII')

function findLongestRepeatedSubpart(items) {
    if (!items) {
        return null;
    }

    if (!(_.isArray(items) || _.isString(items))) {
        return null;
    }

    const n = items.length;
    let LCSRe = new Array(n);
    for (let i = 0; i < n; i++) {
        LCSRe[i] = new Array(n);
        LCSRe[i].fill(0);
    }

    let index = 0;
    let resLength = 0;
    let res = [];

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (items[i] === items[j] && LCSRe[i][j] < j - i) {
                LCSRe[i + 1][j + 1] = LCSRe[i][j] + 1;

                if (LCSRe[i + 1][j + 1] > resLength) {
                    resLength = LCSRe[i + 1][j + 1];
                    index = Math.max(i + 1, index);
                }
            } else {
                LCSRe[i + 1][j + 1] = 0;
            }
        }
    }

    if (resLength > 0) {
        for (let i = index - resLength; i < index; i++) {
            res.push(items[i]);
        }
    }

    if (_.isEmpty(res)) {
        return null;
    }

    return _.isString(items) ? res.join('') : res;
}

module.exports = findLongestRepeatedSubpart;
