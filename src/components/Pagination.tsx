import React from "react";
import { useSearchParams } from "react-router-dom";
import { PAGE } from "../consts/query.const";

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

    number === 1
      ? searchParams.delete(PAGE)
      : searchParams.set(PAGE, `${number}`);

    setSearchParams(searchParams);
  };

  return (
    <div className="w- full flex justify-center my-9">
      {pageList.map((number: number) => (
        <button
          key={number}
          onClick={() => onClickPageBtn(number)}
          className={
            currentPage === number
              ? "w-6 h-6 bg-slate-300 rounded mx-2"
              : "w-6 h-6 mx-2"
          }
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
