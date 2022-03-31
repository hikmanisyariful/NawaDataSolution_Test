const shortCharacter = strParams => {
  let vowels = [];
  let consonants = [];
  const letters = strParams
    .toLowerCase()
    .split("")
    .filter(el => el !== " ");

  for (const letter of letters) {
    if (/[aeiou]/i.test(letter)) {
      vowels.push(letter);
    } else {
      consonants.push(letter);
    }
  }

  const sortVowels = vowels.sort((a, b) => a.localeCompare(b)).join("");
  const sortConsonants = consonants.sort((a, b) => b.localeCompare(a)).join("");

  console.log(`Vowel Characters : ${sortVowels}`);
  console.log(`Consonant Characters : ${sortConsonants}`);
};
