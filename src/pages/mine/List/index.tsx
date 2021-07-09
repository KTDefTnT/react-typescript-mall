import { ConnectProps } from '@/@types/connect';
import React from 'react';
import classnames from 'classnames';
import { WingBlank, Card } from 'antd-mobile';
import { Link } from 'umi';

import styles from './index.less';

const grids = [
  {
    icon: 'card',
    text: '待付款',
    to: '/list',
  },
  {
    icon: 'daifahuo',
    text: '待发货',
    to: '/list',
  },

  {
    icon: 'daishouhuo',
    text: '待收货',
    to: '/list',
  },
  {
    icon: 'pingjia',
    text: '待付款',
    to: '/list',
  },
];

const List = () => {
  return (
    <WingBlank size="lg" className={styles.main}>
      <Card>
        <Card.Header
          title="我的订单"
          extra={<Link to="/list">查看全部订单</Link>}
        />
        <Card.Body>
          <div className={classnames(styles.grids, 'xyCenter ', 'font12')}>
            {grids.map((item) => (
              <Link to={item.to} key={item.icon} className={styles.grid}>
                <i
                  className={classnames('font16 iconfont', 'icon-' + item.icon)}
                />
                <div>{item.text}</div>
              </Link>
            ))}
          </div>
        </Card.Body>
      </Card>
    </WingBlank>
  );
};

export default List;
