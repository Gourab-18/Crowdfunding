import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Web3Context from "../contexts";

import { initializeCause } from "../contexts/useContracts/writeContracts";
import { useContext } from "react";
export const AddCause = () => {
  const { contract, account } = useContext(Web3Context);

  const [cause, setCause] = useState("");
  const [target, setTarget] = useState(0);
  const [address, setAddress] = useState("");

  const handleCause = (e) => {
    setCause(e.target.value);
    // console.log(e.target.value);
  };
  const handleTarget = (e) => {
    setTarget(e.target.value);
    // console.log(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    // console.log(e.target.value);
  };

  const assignCause = async (e) => {
    e.preventDefault();
    console.log(cause);
    console.log(target);
    console.log(address);

    console.log(account.currentAccount);

    await initializeCause(
      contract,
      account.currentAccount,
      cause,
      address,
      target
    );

    setCause("");
    setTarget(0);
    setAddress("");
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="mt-2 flex flex-col items-center justify-center pt-4">
        <div>
          <h1 className="my-2 mb-4 font-sans text-3xl font-semibold text-slate-100">
            Add Cause
          </h1>
        </div>

        <div className="">
          <form>
            <div className="my-4">
              <label className="mb-2 block text-sm font-light text-gray-400 dark:text-white">
                Enter Cause
              </label>
              <input
                type="text"
                className=" block  w-[50vw] border border-gray-300  bg-[rgb(65,66,67)] p-2.5 text-sm text-gray-900 dark:text-white dark:placeholder-gray-400"
                required
                onChange={handleCause}
              />
            </div>
            <div className="my-4">
              <label className="mb-2 block text-sm font-light text-gray-400 dark:text-white">
                Target ( in wei )
              </label>
              <input
                type="number"
                className=" block  w-[50vw] border border-gray-300  bg-[rgb(65,66,67)] p-2.5 text-sm text-gray-900 dark:text-white dark:placeholder-gray-400"
                required
                onChange={handleTarget}
              />
            </div>
            <div className="my-4">
              <label className="mb-2 block text-sm font-light text-gray-400 dark:text-white">
                Person address
              </label>
              <input
                type="text"
                className=" block  w-[50vw] border border-gray-300  bg-[rgb(65,66,67)] p-2.5 text-sm text-gray-900 dark:text-white dark:placeholder-gray-400"
                required
                onChange={handleAddress}
              />
            </div>
          </form>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="mb-2  mt-4 bg-[rgb(210,65,134)] px-6  py-3 text-center  text-sm font-medium uppercase text-white hover:opacity-80"
              onClick={assignCause}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
