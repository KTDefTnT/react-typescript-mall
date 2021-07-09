import { Button, WingBlank } from 'antd-mobile';
import React from 'react';
import styles from './index.less';

interface logoutProps {
  handleLogout: Function;
}
const Logout: React.FC<logoutProps> = ({ handleLogout }) => {
  return (
    <WingBlank size="lg" className={styles.main}>
      {/* 不能直接 onClick={handleLogout}: ts不匹配，一个鼠标事件 一个是function */}
      <Button type="warning" onClick={() => handleLogout()}>
        退出
      </Button>
    </WingBlank>
  );
};
export default Logout;
