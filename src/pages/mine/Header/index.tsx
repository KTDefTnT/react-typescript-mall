import React from 'react';
import classnames from 'classnames';
import { Card, Flex } from 'antd-mobile';
import Arc from '@/components/Arc/index';

import styles from './index.less';

const personal = [
  {
    num: 168,
    title: '商品关注',
    link: '',
  },
  {
    num: 9,
    title: '店铺关注',
    link: '',
  },
  {
    num: 0,
    title: '喜欢的内容',
    link: '',
  },
  {
    num: 100,
    title: '浏览记录',
    link: '',
  },
];

interface HeaderProps {
  name: string;
  icon: string;
}

const Header: React.FC<HeaderProps> = ({ name, icon }) => {
  return (
    <div className={styles.main}>
      <Card full className={styles.header}>
        <Card.Header
          title={<div className={styles.name}>{name}</div>}
          thumb={
            <div className={classnames(styles.userIcon)}>
              <img src={icon} alt="img" />
            </div>
          }
        />
        <Card.Body>
          <Flex justify="between" className="font14">
            {personal.map(({ num, title }) => (
              <Flex.Item
                key={title}
                className={classnames('flexNone', 'txtCenter')}
              >
                <div>{num}</div>
                <div>{title}</div>
              </Flex.Item>
            ))}
          </Flex>
        </Card.Body>
        <Card.Footer
          content="footer content"
          extra={<div>extra footer content</div>}
        />
      </Card>
      <Arc className={styles.arc} />
    </div>
  );
};

export default Header;
