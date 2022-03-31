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

    console.log(`Minimum bus required is : ${amountOfBus}`);
  } else {
    console.log(`Input must be equal with count of family`);
  }
}
