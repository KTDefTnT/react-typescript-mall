import { connect } from 'umi';
import { ConnectProps, ConnectState } from '@/@types/connect';
import { UserModelState } from '@/@types/user';
import { Component } from 'react';

import Header from './Header/index';
import List from './List/index';
import Logout from './Logout/index';

import styles from './index.less';

interface MineProps extends ConnectProps {
  user: UserModelState;
}
class Mine extends Component<MineProps, ConnectState> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'user/getDetail' });
  }

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'user/logout' });
  };

  render() {
    const { user } = this.props;
    const { icon, name } = user.userDetail;
    return (
      <div className={styles.main}>
        <Header icon={icon} name={name} />
        <List />
        <Logout handleLogout={this.handleLogout} />
      </div>
    );
  }
}

export default connect(({ user }: ConnectState) => ({ user }))(Mine);
