import { useSearchParams } from "react-router-dom";
import { SORT, SortByTime, SortByID } from "../consts/query.const";
import { OrderInterface } from "../types/order.type";
import { getQueryData } from "../utils/getQueryData";
import OrderTableBody from "./OrderTableBody";
import { SortType } from "../types/order.type";
import getSortedOrders from "../utils/getSortedOrders";
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
    <>
      <table
        aria-label="admin-table"
        className="w-full bg-amber-400 rounded-tl-2xl rounded-tr-2xl border-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.3)]"
      >
        <thead className=" rounded-tl-2xl rounded-tr-2xl ">
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
      </table>

      <OrderTableBody
        currentOrderList={getCurrentPageOrders(
          getSortedOrders({ querySort: querySort, orders: orders })
        )}
      />
    </>
  );
};

export default OrderTableBoard;
