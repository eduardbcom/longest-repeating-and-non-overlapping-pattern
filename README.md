# longest-repeating-and-non-overlapping-pattern
## Implementation of the algorithm to find the longest repeating and non overlapping pattern.

### Install:
```npm install -S longest-repeating-and-non-overlapping-pattern```

### Examples:

```
  const findLongestRepeatedPattern = require('longest-repeating-and-non-overlapping-pattern');

  findLongestRepeatedPattern('IPPIPPII') === 'IPP'
  findLongestRepeatedPattern('IPPIP') === 'IP'
  findLongestRepeatedPattern('IPPIPPIP') === 'IPP'
  
  findLongestRepeatedPattern(['I', 'P', 'P', 'I', 'P', 'P', 'I', 'I']) === ['I', 'P', 'P'])
  findLongestRepeatedPattern(['I', 'P', 'P', 'I', 'P']) === ['I', 'P'])
  findLongestRepeatedPattern(['I', 'P', 'P', 'I', 'P', 'P', 'I', 'P']) === ['I', 'P', 'P'])
```

### Suggestions to improvement:
  - add custom comparator function as a second argument and be able to process the array of objects
