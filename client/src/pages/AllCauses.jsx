import React from "react";
import Navbar from "../components/Navbar";
export const AllCauses = () => {
  var shows = ["Hii", "Bye"];
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex h-[70vh] flex-col items-center justify-center font-sans font-semibold text-slate-100 ">
        <div className="mb-4">
          <h1>All Causes</h1>
        </div>
        <div class="relative w-[80vw] bg-[rgb(55,56,56)] shadow-md  sm:rounded-lg">
          <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead class="text-xs uppercase dark:text-gray-400">
              <tr className="text-slate-10 font-sans font-semibold">
                <th scope="col" class="px-6 py-3  ">
                  Cause
                </th>
                <th scope="col" class="px-6 py-3">
                  Money Collected
                </th>
                <th scope="col" class="px-6 py-3  ">
                  Target Amount
                </th>
                <th scope="col" class="px-6 py-3">
                  Victim
                </th>
                <th scope="col" class="px-6 py-3">
                  Need Met?
                </th>
              </tr>
            </thead>
            <tbody>
              {shows?.map(() => {
                return (
                  <tr class="text-slate-10 border-b border-gray-200 font-sans font-semibold dark:border-gray-700">
                    <th
                      scope="row"
                      class="whitespace-nowrap px-6 py-4 font-medium text-gray-900  dark:text-white"
                    >
                      Name
                    </th>
                    <td class="text-slate-10 px-6 py-4 font-sans font-semibold">
                      100
                    </td>
                    <td class="px-6 py-4 ">100 wei</td>
                    <td class="px-6 py-4">xacfde4gd</td>
                    <td class="px-6 py-4">No</td>
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
