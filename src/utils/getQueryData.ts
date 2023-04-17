import { PAGE, SEARCH, STATUS, SORT } from "../consts/query.const";

export const getQueryData = (searchParams: URLSearchParams) => {
  const querySort = searchParams.get(SORT);
  const queryPage = searchParams.get(PAGE);
  const queryStatus = searchParams.get(STATUS);
  const querySearch = searchParams.get(SEARCH);

  return {
    querySort,
    queryPage,
    queryStatus,
    querySearch,
  };
};
