import { useSearchParams } from "react-router-dom";
import { OrderInterface } from "../types/order.type";
import { getQueryData } from "../utils/getQueryData";
import { queryStatusHandler } from "../utils/queryHandler";
import OrderTableBody from "./OrderTableBody";

type Props = {
  orders: OrderInterface[];
  offset: number;
  ordersPerPage: number;
};

const OrderTableBoard = ({ orders, offset, ordersPerPage }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryData = getQueryData(searchParams);

  const getCurrentPageOrders = (orderList: OrderInterface[]) => {
    return orderList.slice(offset, offset + ordersPerPage);
  };

  const getFilteredOrders = () => {
    if (queryData.queryID) {
      return orders!.sort(
        (a: OrderInterface, b: OrderInterface) => b.id - a.id
      );
    } else if (queryData.queryTransactionTime) {
      return orders!.sort(
        (a: OrderInterface, b: OrderInterface) =>
          new Date(b.transaction_time).getTime() -
          new Date(a.transaction_time).getTime()
      );
    } else {
      return orders;
    }
  };

  const onClickStatus = (target: boolean) => {
    if (queryData.queryStatus === `${target}`) {
      searchParams.delete("orderStatus");
      setSearchParams(searchParams);
    } else {
      searchParams.set("orderStatus", `${target}`);
      setSearchParams(searchParams);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th
            onClick={() => {
              if (queryData.queryID) {
                searchParams.delete("id");
                setSearchParams(searchParams);
              } else {
                if (queryData.queryTransactionTime) {
                  searchParams.delete("transactionTime");
                  setSearchParams(searchParams);
                }
                searchParams.set("id", "desc");
                setSearchParams(searchParams);
              }
            }}
          >
            주문번호
          </th>
          <th
            onClick={() => {
              if (queryData.queryTransactionTime) {
                searchParams.delete("transactionTime");
                setSearchParams(searchParams);
              } else {
                if (queryData.queryID) {
                  searchParams.delete("id");
                  setSearchParams(searchParams);
                }
                searchParams.set("transactionTime", "desc");
                setSearchParams(searchParams);
              }
            }}
          >
            거래시간
          </th>
          <th>
            주문처리상태
            <button
              onClick={() => {
                onClickStatus(true);
              }}
            >
              완료
            </button>
            <button
              onClick={() => {
                onClickStatus(false);
              }}
            >
              미완료
            </button>
          </th>
          <th>고객번호</th>
          <th>고객이름</th>
          <th>가격</th>
        </tr>
      </thead>
      <OrderTableBody
        currentOrderList={getCurrentPageOrders(getFilteredOrders())}
      />
    </table>
  );
};

export default OrderTableBoard;
