import { OrderInterface } from "../types/order.type";

const OrderTableBody = ({
  currentOrderList,
}: {
  currentOrderList: OrderInterface[];
}) => {
  return (
    <>
      {currentOrderList.length !== 0 ? (
        <div className="w-full h-[550px] overflow-y-auto rounded-bl-2xl rounded-br-2xl scroll_custom">
          <table className="w-full bg-white border-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.3)] h-[500px] overflow-auto">
            <tbody aria-label="table-body">
              {currentOrderList.map((item: OrderInterface) => (
                <tr key={item.id} className="w-full text-center border-b">
                  <td className="py-2">{item.id}</td>
                  <td>{item.transaction_time}</td>
                  <td>
                    {item.status ? (
                      <span aria-label="status-true">완료</span>
                    ) : (
                      <span aria-label="status-false">미완료</span>
                    )}
                  </td>
                  <td>{item.customer_id}</td>
                  <td>{item.customer_name}</td>
                  <td>{item.currency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <h2 className="w-full text-center py-20 font-bold text-2xl">
            해당 데이터를 찾을 수 없습니다.
          </h2>
        </>
      )}
    </>
  );
};

export default OrderTableBody;
