import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import OrderTableBoard from "../components/OrderTableBoard";
import Pagination from "../components/Pagination";
import { PAGE, SEARCH, STATUS } from "../consts/query.const";
import useFetchData from "../hooks/useFetchData";
import { getQueryData } from "../utils/getQueryData";
import { HiOutlineSearch } from "react-icons/hi";
import { MdClear } from "react-icons/md";

const AdminPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryData = getQueryData(searchParams);

  const { isLoading, orders, error } = useFetchData({
    queryStatusData: queryData.queryStatus,
    querySearchData: queryData.querySearch,
  });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const ordersPerPage = 50;
  const offset = (currentPage - 1) * ordersPerPage;

  const [searchInput, setSearchInput] = useState<string>("");

  const setQuerySearch = () => {
    searchParams.set(SEARCH, `${searchInput}`);
    searchParams.set(PAGE, "1");
    setSearchParams(searchParams);
  };

  const setQuerySearchReset = () => {
    searchParams.delete(SEARCH);
    searchParams.set(PAGE, "1");
    setSearchParams(searchParams);
    setSearchInput("");
  };

  const setQueryStatus = (status: string) => {
    if (status === "default") {
      searchParams.delete(STATUS);
      searchParams.set(PAGE, "1");
      setSearchParams(searchParams);
      return;
    }

    searchParams.set(STATUS, `${status}`);
    searchParams.set(PAGE, "1");
    setSearchParams(searchParams);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setQuerySearch();
    }
  };

  useEffect(() => {
    if (queryData.queryPage) setCurrentPage(parseInt(queryData.queryPage));
  }, [searchParams]);

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="max-w-[1200px] mx-auto">
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

            {queryData.querySearch?.length !== 0 &&
              queryData.querySearch !== null && (
                <button onClick={setQuerySearchReset}>
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

        <OrderTableBoard
          orders={orders}
          offset={offset}
          ordersPerPage={ordersPerPage}
        />

        <Pagination
          orderListLength={orders.length}
          ordersPerPage={ordersPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default AdminPage;
