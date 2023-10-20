import React from "react";
import Navbar from "../components/Navbar";
export const AddCause = () => {
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
                //   value={amount}
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
                //   value={reason}
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
                //   value={reason}
              />
            </div>
            {/* <div className="my-4">
            <label className="mb-2 block text-sm font-light text-gray-400 dark:text-white">
              Enter Reason for expense
            </label>
            <input
              type="text"
              className=" block  w-[50vw] border border-gray-300  bg-[rgb(65,66,67)] p-2.5 text-sm text-gray-900 dark:text-white dark:placeholder-gray-400"
              required
              //   value={reason}
            />
          </div> */}
          </form>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="mb-2  mt-4 bg-[rgb(210,65,134)] px-6  py-3 text-center  text-sm font-medium uppercase text-white hover:opacity-80"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
