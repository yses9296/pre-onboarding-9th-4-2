import { useSearchParams } from "react-router-dom";
import { SORT, STATUS, SortByTime, SortByID } from "../consts/query.const";
import { StatusButton, Table, Th, Thead, Tr } from "../styles/table.style";
import { OrderInterface } from "../types/order.type";
import { getQueryData } from "../utils/getQueryData";
import OrderTableBody from "./OrderTableBody";
import { SortType } from "../types/order.type";
import getFilteredOrders from "../utils/getFilteredOrders";

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

  const setQueryStatus = (status: boolean) => {
    queryData.queryStatus === `${status}`
      ? searchParams.delete(STATUS)
      : searchParams.set(STATUS, `${status}`);

    setSearchParams(searchParams);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th
            onClick={() => {
              setQuerySort(SortByID);
            }}
          >
            주문번호
          </Th>
          <Th
            onClick={() => {
              setQuerySort(SortByTime);
            }}
          >
            거래시간
          </Th>
          <Th>
            주문처리상태
            <StatusButton
              onClick={() => {
                setQueryStatus(true);
              }}
              className={queryData.queryStatus === "true" ? "active" : ""}
            >
              완료
            </StatusButton>
            <StatusButton
              onClick={() => {
                setQueryStatus(false);
              }}
              className={queryData.queryStatus === "false" ? "active" : ""}
            >
              미완료
            </StatusButton>
          </Th>
          <Th>고객번호</Th>
          <Th>고객이름</Th>
          <Th>가격</Th>
        </Tr>
      </Thead>
      <OrderTableBody
        currentOrderList={getCurrentPageOrders(
          getFilteredOrders({ querySort: querySort, orders: orders })
        )}
      />
    </Table>
  );
};

export default OrderTableBoard;
