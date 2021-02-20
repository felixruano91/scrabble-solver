const POINTS: Record<string, number> = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
  l: 1,
  n: 1,
  r: 1,
  s: 1,
  t: 1,
  d: 2,
  g: 2,
  b: 3,
  c: 3,
  m: 3,
  p: 3,
  f: 4,
  h: 4,
  v: 4,
  w: 4,
  y: 4,
  k: 5,
  j: 8,
  x: 8,
  q: 10,
  z: 10,
};

export const getScrabbleScore = (word: string) =>
  word
    .split('')
    .reduce((a, character) => a + POINTS[character], 0);

export const isAnagram = (word: string, pattern: string) => {
  // remove any non-alphabet character using regex and convert to lowercase.
  word = word.toLowerCase()
  pattern = pattern.toLowerCase()
  // get the character map of both strings
  const wordCharMap = getCharMap(word)
  const patternCharMap = getCharMap(pattern)

  /* loop through each character in the wordCharMap,
  and check if it exists in patternCharMap and has the same value as
  in wordCharMap. If it doesn't, return false */
  for (let char in wordCharMap) {
    if (wordCharMap[char] !== patternCharMap[char]) {
      return false
    }
  }

  return true
}

const getCharMap = (string: string) => {
  let charMap: Record<string, number> = Object.assign({})
  /*  loop through each character of string and if the character
  exists in the map we increase the value, otherwise we assign 1 */
  for (let char of string) {
    charMap[char] = charMap[char] + 1 || 1
  }

  return charMap
}
