function hasString(word, input) {
  if (word.length > input.length) return "NO";
  let j = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === word[j]) j++;
  }

  return j === word.length ? "YES" : "NO";
}

// input: hereiamstackerrank
// word: hackerrank
// output: YES
