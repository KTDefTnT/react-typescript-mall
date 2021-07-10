export interface QueryType {
  pageNo: number;
  pageSize?: number;
  searchKey: string;
}
export interface PaginationType {
  pageNo: number;
  pageSize: number;
  totalPage: number;
  searchKey: string;
}
