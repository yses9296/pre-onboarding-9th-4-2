export interface OrderInterface {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}

export type SortType = {
  ASC: string;
  DESC: string;
};
