import React from "react";

type Props = {
  orderListLength: number;
  ordersPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({
  orderListLength,
  ordersPerPage,
  currentPage,
  setCurrentPage,
}: Props) => {
  const pageCount = Math.ceil(orderListLength / ordersPerPage);

  const pageList = Array(pageCount)
    .fill(1)
    .map((v, i) => v + i);

  return (
    <>
      {pageList.map((number: number) => (
        <button
          key={number}
          onClick={() => {
            setCurrentPage(number);
          }}
        >
          {number}
        </button>
      ))}
    </>
  );
};

export default Pagination;
