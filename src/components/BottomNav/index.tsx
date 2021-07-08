import { ConnectProps } from '@/@types/connect';
import React from 'react';
import { connect, history } from 'umi';
import { TabBar } from 'antd-mobile';

const menu = [
  {
    title: '首页',
    link: '/',
    icon: 'shouye',
  },
  {
    title: '购物车',
    link: '/cart',
    icon: '3',
  },
  {
    title: '订单列表',
    link: '/list',
    icon: 'icon-',
  },
  {
    title: '我的',
    link: '/mine',
    icon: 'wode',
  },
];

interface BottomNavProps {
  pathname?: string;
}

const BottomNav: React.FC<BottomNavProps> = ({ pathname }) => {
  return (
    <TabBar tintColor="red">
      {menu.map(({ title, link, icon }) => (
        <TabBar.Item
          key={link}
          title={title}
          icon={<span className={'iconfont icon-' + icon}></span>}
          selectedIcon={<span className={'red iconfont icon-' + icon}></span>}
          selected={pathname === link}
          onPress={() => {
            history.push(link);
          }}
        />
      ))}
    </TabBar>
  );
};

export default connect()(BottomNav);
