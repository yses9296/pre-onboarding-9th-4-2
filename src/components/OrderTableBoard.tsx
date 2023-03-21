import { useSearchParams } from "react-router-dom";
import { SORT, SortByTime, SortByID } from "../consts/query.const";
import { OrderInterface } from "../types/order.type";
import { getQueryData } from "../utils/getQueryData";
import OrderTableBody from "./OrderTableBody";
import { SortType } from "../types/order.type";
import getFilteredOrders from "../utils/getFilteredOrders";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

type Props = {
  orders: OrderInterface[];
  offset: number;
  ordersPerPage: number;
};

const OrderTableBoard = ({ orders, offset, ordersPerPage }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryData = getQueryData(searchParams);
  const querySort = queryData.querySort;

  const getCurrentPageOrders = (orderList: OrderInterface[]) => {
    return orderList.slice(offset, offset + ordersPerPage);
  };

  const setQuerySort = (SortType: SortType) => {
    switch (querySort) {
      case SortType.DESC:
        searchParams.set(SORT, SortType.ASC);
        break;
      case SortType.ASC:
        searchParams.delete(SORT);
        break;
      default:
        searchParams.set(SORT, SortType.DESC);
        break;
    }

    setSearchParams(searchParams);
  };

  return (
    <table className="w-full">
      <thead className="bg-amber-400 ">
        <tr>
          <th
            className="py-2 cursor-pointer"
            onClick={() => {
              setQuerySort(SortByID);
            }}
          >
            주문번호
            {querySort == SortByID.DESC ? (
              <FaSortDown className="inline-block" />
            ) : querySort == SortByID.ASC ? (
              <FaSortUp className="inline-block" />
            ) : (
              <FaSort className="inline-block" />
            )}
          </th>
          <th
            className="cursor-pointer"
            onClick={() => {
              setQuerySort(SortByTime);
            }}
          >
            거래시간
            {querySort == SortByTime.DESC ? (
              <FaSortDown className="inline-block" />
            ) : querySort == SortByTime.ASC ? (
              <FaSortUp className="inline-block" />
            ) : (
              <FaSort className="inline-block" />
            )}
          </th>
          <th className="relative">주문처리상태</th>
          <th>고객번호</th>
          <th>고객이름</th>
          <th>가격</th>
        </tr>
      </thead>
      <OrderTableBody
        currentOrderList={getCurrentPageOrders(
          getFilteredOrders({ querySort: querySort, orders: orders })
        )}
      />
    </table>
  );
};

export default OrderTableBoard;
