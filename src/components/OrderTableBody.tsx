import { Td } from "../styles/table.style";
import { OrderInterface } from "../types/order.type";

const OrderTableBody = ({
  currentOrderList,
}: {
  currentOrderList: OrderInterface[];
}) => {
  return (
    <tbody>
      {currentOrderList.length !== 0 &&
        currentOrderList.map((item: OrderInterface) => (
          <tr key={item.id}>
            <Td>{item.id}</Td>
            <Td>{item.transaction_time}</Td>
            <Td>{item.status.toString()}</Td>
            <Td>{item.customer_id}</Td>
            <Td>{item.customer_name}</Td>
            <Td>{item.currency}</Td>
          </tr>
        ))}
    </tbody>
  );
};

export default OrderTableBody;
