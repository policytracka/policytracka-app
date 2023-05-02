import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";

type Props = {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  onSubmit: (val: string | undefined) => void;
  defaultSearchVal?: string;
};

const HeaderTitleWithSearch = (props: Props) => {
  const [inputVal, setInputVal] = useState<string | undefined>(
    props.defaultSearchVal ? props.defaultSearchVal : undefined
  );

  return (
    <div className="text-center py-10">
      {props.title1 && (
        <h3 className="text-2xl font-bold text-yellow-400">{props.title1}</h3>
      )}
      <div className="flex items-center p-5">
        <label className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
            placeholder="Search"
            defaultValue={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          onClick={() => {
            props.onSubmit(inputVal);
          }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
      {props.title3 && (
        <h3 className="text-2xl font-bold text-blue-900">{props.title3}</h3>
      )}
      {props.title4 && (
        <h4 className="text-1xl font-bold text-blue-900">{props.title4}</h4>
      )}
    </div>
  );
};
export default HeaderTitleWithSearch;
