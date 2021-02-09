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

function randomString(x) {
  let arr = [];
  let char = "abcdefjhijqlmnopqrstuvwxyzABCDEFJHIGQLMNOPQRSTUVWXYZ";
  for (let i = 0; i < x; i++) {
    arr.push(char[Math.floor(Math.random() * char.length)]); // [0, 1) * 52 => [0, 51]
  }
  return arr;
}
let x = randomString(5);


function changeVoiceString(str) {``
  let voice_element = ["a", "e", "i", "o", "y"];
  
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < voice_element.length; j++) {
      if (str[i].toLowerCase().indexOf(voice_element[j]) >= 0) {
        str.splice(i, 1);
      }
    }
  }
  return str;
}

console.log(changeVoiceString(x));
