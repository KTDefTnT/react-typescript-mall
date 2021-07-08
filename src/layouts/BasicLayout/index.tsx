import { Component } from 'react';
import { connect } from 'umi';
import { ConnectProps } from '@/@types/connect';

import BottomNav from '@/components/BottomNav/index';
import styles from './index.less';
import '@/static/iconfont/iconfont.css';

class BasicLayout extends Component<ConnectProps> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/fetchCurrentUser',
    });
  }
  render() {
    const { children, location } = this.props;
    const { pathname } = location;
    return (
      <div className={styles.main}>
        <section>{children}</section>
        <footer>
          {pathname !== '/login' && <BottomNav pathname={pathname} />}
        </footer>
      </div>
    );
  }
}
export default connect()(BasicLayout);
