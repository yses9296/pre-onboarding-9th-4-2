import { useQuery } from "react-query";
import { fetchOrderData } from "../apis/fetchOrderData";
import { OrderInterface } from "../types/order.type";

const CURRENT_DATE = "2023-03-08";

const useFetchData = () => {
  const {
    isLoading,
    data: _orders,
    error,
  } = useQuery<OrderInterface[], Error>("orderData", fetchOrderData);

  const orders =
    _orders?.filter((item: OrderInterface) =>
      item.transaction_time.includes(CURRENT_DATE)
    ) || [];

  return { isLoading, orders, error };
};

export default useFetchData;
