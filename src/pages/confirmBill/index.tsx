import { connect } from 'umi';
import { Component } from 'react';
import { ConnectState } from '@/@types/connect';
import { getUserAddress } from '@/services/user';

import styles from './index.less';

import ListNode from '@/components/ListNode/index';
import UserAddress from './userAddress';
import PayBar from './payBar';
import { WhiteSpace, WingBlank } from 'antd-mobile';

interface ConfirmBillProps extends ConnectState {}
interface ConfirmBillState {
  name: string;
  tel: string;
  address: string;
}

class ConfirmBill extends Component<ConfirmBillProps, ConfirmBillState> {
  state: ConfirmBillState = {
    tel: '',
    name: '',
    address: '',
  };

  componentDidMount() {
    getUserAddress().then((resp) => {
      this.setState({
        ...resp,
      });
    });
  }

  render() {
    const { data } = this.props.cart;
    return (
      <div className={styles.main}>
        <UserAddress {...this.state} />
        <WhiteSpace size="lg" />
        <WingBlank size="md">
          <ListNode data={data} />
        </WingBlank>
        <PayBar />
      </div>
    );
  }
}

export default connect(({ cart }: ConnectState) => ({ cart }))(ConfirmBill);
