import { useQuery } from "react-query";
import { fetchOrderData } from "../apis/fetchOrderData";
import { OrderInterface } from "../types/order.type";

const CURRENT_DATE = "2023-03-08";

type QueryProps = {
  queryStatus: string | null;
  querySearch: string | null;
};

const useFetchData = ({ queryStatus, querySearch }: QueryProps) => {
  const {
    isLoading,
    data: _orders,
    error,
  } = useQuery<OrderInterface[], Error>("orderData", fetchOrderData, {
    staleTime: 5000,
    refetchInterval: 5000,
  });

  const filteredByDate = _orders?.filter((item: OrderInterface) =>
    item.transaction_time.includes(CURRENT_DATE)
  );

  if (queryStatus !== null && querySearch != null) {
    const orders =
      filteredByDate
        ?.filter((item: OrderInterface) =>
          item.customer_name.includes(querySearch!)
        )
        ?.filter(
          (item: OrderInterface) => item.status.toString() === queryStatus
        ) || [];

    return { isLoading, orders, error };
  } else if (querySearch !== null) {
    const orders =
      filteredByDate?.filter((item: OrderInterface) =>
        item.customer_name.includes(querySearch!)
      ) || [];

    return { isLoading, orders, error };
  } else if (queryStatus !== null) {
    const orders =
      filteredByDate?.filter(
        (item: OrderInterface) => item.status.toString() === queryStatus
      ) || [];

    return { isLoading, orders, error };
  }

  const orders = filteredByDate || [];

  return { isLoading, orders, error };
};

export default useFetchData;
