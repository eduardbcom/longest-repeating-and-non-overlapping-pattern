# longest-repeating-and-non-overlapping-subpart
## Implementation of the algorithm to find the longest repeating and non overlapping subpart.

### Install:
```npm install longest-repeating-and-non-overlapping-subpart```

### Examples:

```
  const findLongestRepeatedSubpart = require('longest-repeating-and-non-overlapping-subpart');

  findLongestRepeatedSubpart('IPPIPPII') === 'IPP'
  findLongestRepeatedSubpart('IPPIP') === 'IP'
  findLongestRepeatedSubpart('IPPIPPIP') === 'IPP'
  
  findLongestRepeatedSubpart(['I', 'P', 'P', 'I', 'P', 'P', 'I', 'I']) === ['I', 'P', 'P'])
  findLongestRepeatedSubpart(['I', 'P', 'P', 'I', 'P']) === ['I', 'P'])
  findLongestRepeatedSubpart(['I', 'P', 'P', 'I', 'P', 'P', 'I', 'P']) === ['I', 'P', 'P'])
```

### Suggestions to improvement:
  - add custom comparator function as a second argument and be able to process the array of objects
