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
          <tr key={item.id} className="text-center border-b">
            <td className="py-2">{item.id}</td>
            <td>{item.transaction_time}</td>
            <td>{item.status.toString()}</td>
            <td>{item.customer_id}</td>
            <td>{item.customer_name}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
    </tbody>
  );
};

export default OrderTableBody;
