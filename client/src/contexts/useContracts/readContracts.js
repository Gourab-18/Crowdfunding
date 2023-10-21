const getCauses = async (contract) => {
  if (!contract) {
    return false;
  }

  console.log("Got contract");

  console.log(contract);

  const allData = [];

  const res = await contract.methods.returnCauseNames().call();
  for (let i = 0; i < res.length; i++) {
    const val = await contract.methods.mp(res[i]).call();
    // console.log(val);
    allData.push(val);
  }

  console.log(allData);
  return allData;
};

// const getMapping = async (contract) => {
//   if (!contract) {
//     return false;
//   }

//   const res = await contract.methods.mp.call();
//   console.log("Res is", res);
// };

export { getCauses };
