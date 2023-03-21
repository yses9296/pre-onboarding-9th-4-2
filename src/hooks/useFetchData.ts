import { useQuery } from "react-query";
import { fetchOrderData } from "../apis/fetchOrderData";
import { OrderInterface } from "../types/order.type";

const CURRENT_DATE = "2023-03-08";

type QueryProps = {
  queryStatusData: string | null;
  querySearchData: string | null;
};

const useFetchData = ({ queryStatusData, querySearchData }: QueryProps) => {
  const {
    isLoading,
    data: _orders,
    error,
  } = useQuery<OrderInterface[], Error>("orderData", fetchOrderData, {
    refetchInterval: 5000,
  });

  const filteredByDate = _orders?.filter((item: OrderInterface) =>
    item.transaction_time.includes(CURRENT_DATE)
  );

  let orders = filteredByDate || [];

  if (queryStatusData !== null && querySearchData != null) {
    orders =
      filteredByDate
        ?.filter((item: OrderInterface) =>
          item.customer_name
            .toLowerCase()
            .includes(querySearchData!.toLowerCase())
        )
        ?.filter(
          (item: OrderInterface) => item.status.toString() === queryStatusData
        ) || [];
  } else if (querySearchData !== null) {
    orders =
      filteredByDate?.filter((item: OrderInterface) =>
        item.customer_name
          .toLowerCase()
          .includes(querySearchData!.toLowerCase())
      ) || [];
  } else if (queryStatusData !== null) {
    orders =
      filteredByDate?.filter(
        (item: OrderInterface) => item.status.toString() === queryStatusData
      ) || [];
  }

  return { isLoading, orders, error };
};

export default useFetchData;
