import React from 'react';
import { Card } from 'antd-mobile';
import styles from './index.less';
import classnames from 'classnames';

export interface UserAddressProps {
  name: string;
  tel: string;
  address: string;
}

const UserAddress: React.FC<UserAddressProps> = ({ name, tel, address }) => {
  return (
    <Card className={styles.main}>
      <i
        className={classnames(
          styles.icon,
          'xyCenter',
          'iconfont icon-dizhi_huaban',
        )}
      ></i>
      <div>
        <span className="font14">{name}</span>
        <span className="font12">{tel}</span>
      </div>
      <div className="font12">{address}</div>
    </Card>
  );
};

export default UserAddress;
