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
      <div className="flex flex-row items-center mb-2 ">
        <label className="font-bold mr-3">고객 이름 검색</label>
        <div className="w-fit rounded bg-white">
          <input
            type="text"
            aria-label="search-input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Search by keywords"
            className="w-80 rounded px-3 py-1 outline-0"
          />
          <button
            aria-label="search-button"
            onClick={setQuerySearch}
            className="mx-2"
          >
            <HiOutlineSearch />
          </button>
          {querySearchData?.length !== 0 && querySearchData !== null && (
            <button onClick={setResetQuerySearch}>
              <MdClear />
            </button>
          )}
        </div>
      </div>
      <div>
        <label className="font-bold mr-3">주문처리상태</label>
        <select
          name="status"
          id="status"
          onChange={(e) => setQueryStatus(e.target.value)}
          className="rounded px-3 py-1"
        >
          <option aria-label="status-default" value="default">
            Default
          </option>
          <option aria-label="status-true" value="true">
            완료
          </option>
          <option aria-label="status-false" value="false">
            미완료
          </option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
