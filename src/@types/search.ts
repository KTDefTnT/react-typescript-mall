interface QueryType {
  pageNo: number;
  pageSize?: number;
  searchKey: string;
}

interface DataType {
  id: number;
  img: string;
  link: string;
  price: string;
  tags: string[];
  title: string;
}

interface PaginationType {
  pageNo: number;
  pageSize: number;
  totalPage: number;
  searchKey: string;
}

export { QueryType, DataType, PaginationType };
