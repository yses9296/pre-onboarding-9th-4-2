import { useSearchParams } from "react-router-dom";
import { SORT, STATUS, ID_DESC, TIME_DESC } from "../consts/query.const";
import { StatusButton, Table, Th, Thead, Tr } from "../styles/table.style";
import { OrderInterface } from "../types/order.type";
import { getQueryData } from "../utils/getQueryData";
import OrderTableBody from "./OrderTableBody";

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

  const getFilteredOrders = () => {
    if (querySort === ID_DESC) {
      return orders!.sort(
        (a: OrderInterface, b: OrderInterface) => b.id - a.id
      );
    } else if (querySort === TIME_DESC) {
      return orders!.sort(
        (a: OrderInterface, b: OrderInterface) =>
          new Date(b.transaction_time).getTime() -
          new Date(a.transaction_time).getTime()
      );
    } else {
      return orders;
    }
  };

  const setQuerySort = (queryValue: string) => {
    querySort === queryValue
      ? searchParams.delete(SORT)
      : searchParams.set(SORT, queryValue);
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
              setQuerySort(ID_DESC);
            }}
          >
            주문번호
          </Th>
          <Th
            onClick={() => {
              setQuerySort(TIME_DESC);
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
        currentOrderList={getCurrentPageOrders(getFilteredOrders())}
      />
    </Table>
  );
};

export default OrderTableBoard;
