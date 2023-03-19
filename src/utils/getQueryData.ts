export const getQueryData = (searchParams: URLSearchParams) => {
  const queryID = searchParams.get("id");
  const queryTransactionTime = searchParams.get("transactionTime");
  const queryPage = searchParams.get("page");

  return { queryID, queryTransactionTime, queryPage };
};
