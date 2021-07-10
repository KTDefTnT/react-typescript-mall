import { connect } from 'umi';
import { Component } from 'react';
import { ConnectState } from '@/@types/connect';

import UserAddress from './userAddress';

import styles from './index.less';

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

  render() {
    return (
      <div className={styles.main}>
        <UserAddress {...this.state} />
      </div>
    );
  }
}

export default connect(({ cart }: ConnectState) => ({ cart }))(ConfirmBill);
