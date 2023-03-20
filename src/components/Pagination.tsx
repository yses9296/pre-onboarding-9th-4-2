import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const pageCount = Math.ceil(orderListLength / ordersPerPage);

  const pageList = Array(pageCount)
    .fill(1)
    .map((v, i) => v + i);

  const onClickPageBtn = (number: number) => {
    setCurrentPage(number);

    if (number === 1) {
      searchParams.delete("page");
      setSearchParams(searchParams);
    } else {
      searchParams.set("page", `${number}`);
      setSearchParams(searchParams);
    }
  };

  return (
    <>
      {pageList.map((number: number) => (
        <button key={number} onClick={() => onClickPageBtn(number)}>
          {number}
        </button>
      ))}
    </>
  );
};

export default Pagination;
