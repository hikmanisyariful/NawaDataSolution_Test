import React, { useState } from "react";

export default function SortCharacter() {
  const [str, setStr] = useState("");
  const [result, setResult] = useState({ vowels: "", consonants: "" });

  const onChange = e => {
    setStr(e.target.value);
  };

  const handleClick = e => {
    e.preventDefault();
    const sort = sortCharacter(str);
    setResult(sort);
    console.log(sort);
    setStr("");
  };

  return (
    <div>
      <div className="row d-flex justify-content-center align-items-center mt-5">
        <form className="col-6 border p-3">
          <label className="form-label">Please input one line of words</label>
          <input
            type="text"
            value={str}
            onChange={onChange}
            className="form-control mb-2"
          />
          <button className="btn btn-primary" onClick={handleClick}>
            Sort Characters
          </button>
        </form>
      </div>
      <div className="row d-flex justify-content-center align-items-center mt-5">
        <div className="mt-5 col-6">
          <p className="">
            Vowel Characters : <span>{result.vowels}</span>
          </p>
          <p className="">
            Consonants Characters : <span>{result.consonants}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

const sortCharacter = strParams => {
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

  // console.log(`Vowel Characters : ${sortVowels}`);
  // console.log(`Consonant Characters : ${sortConsonants}`);
  return { vowels: sortVowels, consonants: sortConsonants };
};
