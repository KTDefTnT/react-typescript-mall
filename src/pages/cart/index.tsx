import { Component } from 'react';
import { connect, history, Dispatch } from 'umi';
import { getCart, editCart } from '@/services/cart';
import List from './List';
import PayBar from './PayBar';

import styles from './index.less';
import { CartModelState, UpdateProductType } from '@/@types/cart';

interface CartProps {
  dispatch: Dispatch;
}
class Cart extends Component<CartProps, CartModelState> {
  state: CartModelState = {
    data: [],
  };

  componentDidMount() {
    getCart().then((resp) => {
      this.setState({
        ...resp.list,
      });
    });
  }

  // 更新当前数据的选中状态
  updateProduct = (newState: UpdateProductType) => {
    // 更新数据
    const { id, index, count } = newState;
    console.log('state', this);
    let data = [...this.state.data];

    // 如果数据为0  则删除
    if (count === 0) {
      data.splice(index, 1);
    } else {
      Object.assign(data[index], newState);
    }

    // 真实接口可传值
    editCart().then(() => {
      this.setState({
        data,
      });
    });
  };

  checkAllChange = (checkedAll: boolean) => {
    let data = [...this.state.data];
    let newState = data.map((item) => {
      item.checked = checkedAll;
      return item;
    });
    this.setState({ data: newState });
  };

  goPay = async () => {
    const { data } = this.state;
    const checkedData = data.filter((item) => item.checked);

    await this.props.dispatch({
      type: 'cart/saveCart',
      payload: { data: checkedData },
    });
    history.push('/confirmBill');
  };

  render() {
    const { data } = this.state;
    return (
      <div className={styles.main}>
        <List data={data} updateProduct={this.updateProduct} />
        <PayBar
          data={data}
          checkAllChange={this.checkAllChange}
          goPay={this.goPay}
        />
      </div>
    );
  }
}

export default connect()(Cart);
