const initializeCause = async (contract, account, cause, dead, target) => {
  console.log("I am initializing cause");
  console.log("Contract is");
  console.log(contract);
  await contract.methods
    .createCause(cause, dead, target)
    .send({ from: account });
};

const donateMoney = async (contract, account, cause, money) => {
  console.log("Hii I am donating money");
  await contract.methods
    .getMoney(cause, money)
    .send({ from: account, value: money });
};

export { initializeCause, donateMoney };
