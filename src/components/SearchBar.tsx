import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdClear } from "react-icons/md";
import { SEARCH, STATUS } from "../consts/query.const";

import useQueryData from "../hooks/useQueryData";

type Props = {
  querySearchData: string | null;
};

const SearchBar = ({ querySearchData }: Props) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const { setQueryData, setResetQueryData } = useQueryData();

  const setQuerySearch = () => {
    setQueryData(SEARCH, searchInput);
  };

  const setResetQuerySearch = () => {
    setResetQueryData(SEARCH);
    setSearchInput("");
  };

  const setQueryStatus = (status: string) => {
    if (status === "default") {
      setResetQueryData(STATUS);
      return;
    }
    setQueryData(STATUS, status);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setQuerySearch();
    }
  };
  return (
    <div className=" mb-5">
      <div className="flex flex-row items-center mb-2">
        <label className="font-bold mr-3">고객 이름 검색</label>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Search by keywords"
          className="w-80 border border-slate-500 rounded px-3 py-1 "
        />
        <button onClick={setQuerySearch} className="mx-2">
          <HiOutlineSearch />
        </button>

        {querySearchData?.length !== 0 && querySearchData !== null && (
          <button onClick={setResetQuerySearch}>
            <MdClear />
          </button>
        )}
      </div>
      <div>
        <label className="font-bold mr-3">주문처리상태</label>
        <select
          name="status"
          id="status"
          onChange={(e) => setQueryStatus(e.target.value)}
          className="border rounded px-3 py-1"
        >
          <option value="default">default</option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
