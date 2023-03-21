import { SortType } from "../types/order.type";

export const PAGE = "page";
export const STATUS = "status";
export const SEARCH = "search";
export const SORT = "sort";

export const ID_DESC = "ID_DESC";
export const TIME_DESC = "TIME_DESC";
export const ID_ASC = "ID_ASC";
export const TIME_ASC = "TIME_ASC";

export const SortByID: SortType = {
  ASC: ID_ASC,
  DESC: ID_DESC,
};

export const SortByTime: SortType = {
  ASC: TIME_ASC,
  DESC: TIME_DESC,
};
