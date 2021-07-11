import React, { useState } from 'react';
import { connect } from 'umi';
import { ConnectState } from '@/@types/connect';
import { CartModelState } from '@/@types/cart';
import { Button } from 'antd-mobile';
import PayModel from '@/components/PayModel';

import styles from './index.less';

interface PayBarProps {
  cart: CartModelState;
}

const PayBar: React.FC<PayBarProps> = ({ cart }) => {
  const [showPay, setShowPay] = useState<boolean>(false);
  const onOpenChange = () => {
    setShowPay(!showPay);
  };

  let totalCount = 0,
    totalPrice = 0;
  const { data } = cart;
  data.map((item) => {
    if (item.checked) {
      totalPrice += Number(item.price) * item.count;
      totalCount += item.count;
    }
  });

  return (
    <React.Fragment>
      <div className={styles.main}>
        <div className={styles.count}>共：{totalCount}件</div>
        <div className={styles.price}>合计：{totalPrice.toFixed(2)}</div>
        <Button
          type="warning"
          onClick={onOpenChange}
          className={styles.btn}
          size="small"
        >
          去支付
        </Button>
      </div>
      <PayModel showPay={showPay} onOpenChange={onOpenChange} />
    </React.Fragment>
  );
};

export default connect(({ cart }: ConnectState) => ({ cart }))(PayBar);
