import { Component } from 'react';
import { getGoodsList } from '@/services/list';

import styles from './index.less';
import { ProductType } from '@/@types/product';
import ListNode from '@/components/ListNode/index';

interface GoodsListState {
  data: ProductType[];
}
export default class GoodsList extends Component {
  state: GoodsListState = {
    data: [],
  };

  componentDidMount() {
    getGoodsList().then((resp) => {
      this.setState({
        ...resp.list,
      });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.main}>
        <ListNode data={data} />
      </div>
    );
  }
}
