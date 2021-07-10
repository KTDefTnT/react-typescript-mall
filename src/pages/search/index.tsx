import { Component } from 'react';
import SearchInput from './SearchInput';
import List from './List';

import styles from './index.less';
import { QueryType, PaginationType } from '@/@types/search';
import { queryList } from '@/services/search';
import { ProductType } from '@/@types/product';

interface ListState {
  data: ProductType[];
  pagination: PaginationType;
}

export default class Search extends Component<{}, ListState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      pagination: {
        pageNo: 1,
        pageSize: 10,
        totalPage: 0,
        searchKey: '',
      },
    };
  }

  handleQuery = (pagination?: QueryType) => {
    let { searchKey, pageNo, pageSize } = this.state.pagination;
    if (pagination) {
      ({ searchKey = '', pageNo = 1, pageSize = 10 } = pagination);
    }
    queryList({ searchKey, pageNo, pageSize }).then((resp) => {
      this.setState((prevState) => ({
        data:
          pageNo === 1
            ? resp.list.data
            : [...prevState.data, ...resp.list.data],
        pagination: resp.list.pagination,
      }));
    });
  };

  render() {
    const { data, pagination } = this.state;
    return (
      <div className={styles.main}>
        <SearchInput handleQuery={this.handleQuery} />
        <List
          data={data}
          pagination={pagination}
          handleQuery={this.handleQuery}
        />
      </div>
    );
  }
}
