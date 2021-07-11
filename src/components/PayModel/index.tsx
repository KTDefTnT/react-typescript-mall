import React, { useCallback } from 'react';
import classnames from 'classnames';
import { history } from 'umi';
import {
  Drawer,
  Card,
  InputItem,
  Button,
  WhiteSpace,
  Toast,
} from 'antd-mobile';
import styles from './index.less';

interface PayModelProps {
  showPay: boolean;
  onOpenChange: () => void;
}

const PayModel: React.FC<PayModelProps> = ({ showPay, onOpenChange }) => {
  return (
    <Drawer
      open={showPay}
      sidebar={<Node onOpenChange={onOpenChange} />}
      onOpenChange={onOpenChange}
      position="bottom"
      enableDragHandle
      contentStyle={{
        color: '#A6A6A6',
        textAlign: 'center',
        paddingTop: 42,
      }}
      children={<div />}
    />
  );
};

interface NodeProps {
  onOpenChange: () => void;
}
function Node({ onOpenChange }: NodeProps) {
  const pay = useCallback(() => {
    // 模拟支付
    setTimeout(() => {
      Toast.success('支付成功！', 2);
      onOpenChange();
      setTimeout(() => {
        history.push('/list');
      }, 2000);
    }, 1000);
  }, []);

  return (
    <Card full className={styles.main}>
      <Card.Header title="付款详情" />
      <Card.Body>
        <InputItem type="phone" placeholder="请输入手机号" clear />
        <div className={classnames(styles.auth, 'xyCenter')}>
          <InputItem
            type="number"
            maxLength={6}
            placeholder="请输入6位验证码"
            clear
          />
          <Button className={styles.authBtn}>发送验证码</Button>
        </div>
        <WhiteSpace size="lg" />
        <Button type="warning" onClick={pay}>
          立即付款
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PayModel;

0;
