const getCauses = async (contract) => {
  if (!contract) {
    return false;
  }

  console.log("Got contract");

  console.log(contract);

  const res = await contract.methods.returnCauseNames().call();
  console.log("Respone");
  console.log(res);
  return res;
};

export { getCauses };
