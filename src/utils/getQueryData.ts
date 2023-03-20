import { ID, PAGE, SEARCH, STATUS, TIME } from "../consts/query.const";

export const getQueryData = (searchParams: URLSearchParams) => {
  const queryID = searchParams.get(ID);
  const queryTransactionTime = searchParams.get(TIME);
  const queryPage = searchParams.get(PAGE);
  const queryStatus = searchParams.get(STATUS);
  const querySearch = searchParams.get(SEARCH);

  return { queryID, queryTransactionTime, queryPage, queryStatus, querySearch };
};
