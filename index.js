

function filterVowel(words) {
  // { 
  //   variableEnvironment : {
  //      vowels: hgjhgjhgjhgj
  //      filtersWords: uninitialized
  //      y: 10
  //   }
  // }
  var y = 10;
  const vowels = ["a", "e", "u", "y", "i", "o"];
  const filtersWords = words.filter(word =>
    [...word].some(latter => vowels.includes(latter.toLowerCase()))
  );

  return filtersWords;
}

let words = ["Arthur", "Karen"];

filterVowel(words);

// [...word]  => word.split('')
