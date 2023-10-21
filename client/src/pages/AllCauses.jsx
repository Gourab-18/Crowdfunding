import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Web3Context from "../contexts";
import { getCauses } from "../contexts/useContracts/readContracts";
import { useState, useContext } from "react";

export const AllCauses = () => {
  var shows = ["Hii", "Bye"];

  const [causes, setCauses] = useState([]);

  const { contract, account } = useContext(Web3Context);

  useEffect(() => {
    console.log("Contract changed");
    DisplayAllCauses();
  }, [contract]);

  const DisplayAllCauses = async () => {
    const temp = await getCauses(contract);

    setCauses(temp);
  };

  console.log("Causes are the following", causes);

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex h-[70vh] flex-col items-center justify-center font-sans font-semibold text-slate-100 ">
        <div className="mb-4">
          <h1>All Causes</h1>
        </div>
        <div className="relative w-[80vw] bg-[rgb(55,56,56)] shadow-md  sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="text-xs uppercase dark:text-gray-400">
              <tr className="text-slate-10 font-sans font-semibold">
                <th scope="col" className="px-6 py-3  ">
                  Cause
                </th>
                <th scope="col" className="px-6 py-3">
                  Money Collected
                </th>
                <th scope="col" className="px-6 py-3  ">
                  Target Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Victim
                </th>
                <th scope="col" className="px-6 py-3">
                  Need Met?
                </th>
              </tr>
            </thead>
            <tbody>
              {causes.length > 0 &&
                causes?.map((show, index) => {
                  return (
                    <tr
                      className="text-slate-10 border-b border-gray-200 font-sans font-semibold dark:border-gray-700"
                      key={index}
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900  dark:text-white"
                      >
                        {show[0]}
                      </th>
                      <td className="text-slate-10 px-6 py-4 font-sans font-semibold">
                        {show[1]}
                      </td>
                      <td className="px-6 py-4 "> {show[2]} wei</td>
                      <td className="px-6 py-4">{show[3]}</td>
                      <td className="px-6 py-4">{show[4] ? `Yes` : `No`}</td>

                      {/* <td className="px-6 py-4">No</td> */}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
