import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import OrderTableBoard from "../components/OrderTableBoard";
import Pagination from "../components/Pagination";
import useFetchData from "../hooks/useFetchData";
import { getQueryData } from "../utils/getQueryData";

const AdminPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryData = getQueryData(searchParams);

  const queryStatus = queryData.queryStatus;
  const querySearch = queryData.querySearch;
  const { isLoading, orders, error } = useFetchData({
    queryStatus,
    querySearch,
  });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const ordersPerPage = 20;
  const offset = (currentPage - 1) * ordersPerPage;

  const [searchInput, setSearchInput] = useState("");
  const onClickSearchBtn = () => {
    searchParams.set("search", `${searchInput}`);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (queryData.queryPage) setCurrentPage(parseInt(queryData.queryPage));
  }, [searchParams]);

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h2>AdminPage</h2>

      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={onClickSearchBtn}>검색</button>
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
  );
};

export default AdminPage;
