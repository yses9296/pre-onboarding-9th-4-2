import React from "react";
import { useSearchParams } from "react-router-dom";
import { PAGE } from "../consts/query.const";
import { PageButton, PaginationWrap } from "../styles/pagination.style";

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
    <PaginationWrap>
      {pageList.map((number: number) => (
        <PageButton
          key={number}
          onClick={() => onClickPageBtn(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </PageButton>
      ))}
    </PaginationWrap>
  );
};

export default Pagination;
