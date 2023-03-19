import { useEffect, useState } from "react";
import OrderTableBody from "../components/OrderTableBody";
import Pagination from "../components/Pagination";
import useFetchData from "../hooks/useFetchData";
import { OrderInterface } from "../types/order.type";

const CURRENT_DATE = "2023-03-08";

const AdminPage = () => {
  const { isLoading, orders, error } = useFetchData();
  const [totalOrderList, setTotalOrderList] = useState<OrderInterface[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const ordersPerPage = 20;
  const offset = (currentPage - 1) * ordersPerPage;

  useEffect(() => {
    if (orders !== undefined) {
      const current_order_list = orders.filter((item: OrderInterface) =>
        item.transaction_time.includes(CURRENT_DATE)
      );
      setTotalOrderList([...current_order_list]);
    }
  }, [orders]);

  const getCurrentPageOrders = (orderList: OrderInterface[]) => {
    return orderList.slice(offset, offset + ordersPerPage);
  };

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h2>AdminPage</h2>

      <table>
        <thead>
          <tr>
            <th>주문번호</th>
            <th>거래시간</th>
            <th>주문처리상태</th>
            <th>고객번호</th>
            <th>고객이름</th>
            <th>가격</th>
          </tr>
        </thead>
        <OrderTableBody
          currentOrderList={getCurrentPageOrders(totalOrderList)}
        />
      </table>
      <Pagination
        orderListLength={totalOrderList.length}
        ordersPerPage={ordersPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default AdminPage;
