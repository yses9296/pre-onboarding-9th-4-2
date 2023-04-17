import { useSearchParams } from "react-router-dom";
import { PAGE } from "../consts/query.const";

function useQueryData() {
  const [searchParams, setSearchParams] = useSearchParams();
  const setQueryData = (queryKey: string, queryValue: string) => {
    searchParams.set(queryKey, queryValue);
    searchParams.set(PAGE, "1");
    setSearchParams(searchParams);
  };

  const setResetQueryData = (querykey: string) => {
    searchParams.delete(querykey);
    searchParams.set(PAGE, "1");
    setSearchParams(searchParams);
  };

  return { setQueryData, setResetQueryData };
}

export default useQueryData;
