import React from "react";
import { useSearchParams } from "react-router-dom";
import { getQueryData } from "./getQueryData";

function queryHandler() {}

export default queryHandler;

type QueryProps = {
  queryTarget: string | null;
  queryTargetKey: string;
};

export function queryStatusHandler({
  queryTarget,
  queryTargetKey,
}: QueryProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  if (queryTarget) {
    searchParams.delete(queryTargetKey);
    setSearchParams(searchParams);
  } else {
    searchParams.set(queryTargetKey, "desc");
    setSearchParams(searchParams);
  }
}
