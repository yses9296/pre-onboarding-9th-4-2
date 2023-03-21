import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import OrderTableBoard from "../components/OrderTableBoard";
import Pagination from "../components/Pagination";
import useFetchData from "../hooks/useFetchData";
import { getQueryData } from "../utils/getQueryData";
import SearchBar from "../components/SearchBar";

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

  useEffect(() => {
    if (queryData.queryPage) setCurrentPage(parseInt(queryData.queryPage));
  }, [searchParams]);

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <SearchBar querySearchData={queryData.querySearch} />

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
