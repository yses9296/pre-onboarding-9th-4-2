import { ID_ASC, ID_DESC, TIME_ASC, TIME_DESC } from "../consts/query.const";
import { OrderInterface } from "../types/order.type";

type Props = {
  querySort: string | null;
  orders: OrderInterface[];
};

const getFilteredOrders = ({ querySort, orders }: Props) => {
  switch (querySort) {
    case ID_DESC:
      return orders!.sort(
        (a: OrderInterface, b: OrderInterface) => b.id - a.id
      );
    case ID_ASC:
      return orders!.sort(
        (a: OrderInterface, b: OrderInterface) => a.id - b.id
      );
    case TIME_DESC:
      return orders!.sort(
        (a: OrderInterface, b: OrderInterface) =>
          new Date(b.transaction_time).getTime() -
          new Date(a.transaction_time).getTime()
      );
    case TIME_ASC:
      return orders!.sort(
        (a: OrderInterface, b: OrderInterface) =>
          new Date(a.transaction_time).getTime() -
          new Date(b.transaction_time).getTime()
      );
    default:
      return orders;
  }
};

export default getFilteredOrders;
