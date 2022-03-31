import React, { useState } from "react";

export default function Psbb() {
  const [numberOfFamilies, setNumberOfFamilies] = useState(0);
  const [membersOfFamily, setMembersOfFamily] = useState("");
  const [result, setResult] = useState("");

  const onChangeNumberOfFamilies = e => {
    setNumberOfFamilies(e.target.value);
  };

  const onChangeMembersOfFamily = e => {
    setMembersOfFamily(e.target.value);
  };

  const handleClick = e => {
    e.preventDefault();
    const getBus = getMinimumBus(numberOfFamilies, membersOfFamily);
    setResult(getBus);
    setNumberOfFamilies(0);
    setMembersOfFamily("");
  };

  return (
    <div>
      <div className="row d-flex justify-content-center align-items-center mt-5">
        <form className="col-6 border p-3">
          <label className="form-label">
            Please input the number of families
          </label>
          <input
            type="number"
            value={numberOfFamilies}
            onChange={onChangeNumberOfFamilies}
            className="form-control mb-2"
          />
          <label className="form-label">
            Please input the number of members in the family (separated by a
            space)
          </label>
          <input
            type="text"
            value={membersOfFamily}
            onChange={onChangeMembersOfFamily}
            className="form-control mb-2"
          />

          <button className="btn btn-primary" onClick={handleClick}>
            Get amount of bus
          </button>
        </form>
      </div>
      <div className="row d-flex justify-content-center align-items-center mt-5">
        <div className="mt-5 col-6">
          <p className="">{result}</p>
        </div>
      </div>
    </div>
  );
}

function getMinimumBus(numberOfFamilies, membersOfFamily) {
  const countOfFamily = membersOfFamily.split(" ").filter(el => el !== "");

  if (Number(numberOfFamilies) === countOfFamily.length) {
    const families = countOfFamily.reduce((acc, curr) => {
      if (Object.keys(acc).length === 0) {
        acc[curr] = [curr];
      } else {
        const isExist = Object.keys(acc).filter(member => member === curr);
        if (isExist.length === 0) {
          acc[curr] = [curr];
        } else {
          acc[curr].push(curr);
        }
      }
      return acc;
    }, {});

    const amountOfBus = Object.values(families).reduce((acc, curr) => {
      let accTemp = acc + Math.ceil(curr.length / 4);
      return accTemp;
    }, 0);

    return `Minimum bus required is : ${amountOfBus}`;
  } else {
    return `Input must be equal with count of family`;
  }
}
