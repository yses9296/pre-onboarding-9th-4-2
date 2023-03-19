import { useQuery } from "react-query";
import { fetchOrderData } from "../apis/fetchOrderData";
import { OrderInterface } from "../types/order.type";

const useFetchData = () => {
  const {
    isLoading,
    data: orders,
    error,
  } = useQuery<OrderInterface[], Error>("orderData", fetchOrderData);

  return { isLoading, orders, error };
};

export default useFetchData;
