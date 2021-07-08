import { ConnectProps } from '@/@types/connect';
import { LoginParams } from '@/@types/login';
import { Component } from 'react';
import styles from './index.less';

import LoginForm from './LoginForm';
import { History, connect } from 'umi';

interface LoginProps extends ConnectProps {
  history: History;
}

class Login extends Component<LoginProps> {
  handleSubmit = async (value: LoginParams) => {
    const { dispatch, location, history } = this.props;
    const { from } = location.state;
    await dispatch({ type: 'user/login', payload: value });
    history.push(from);
  };

  render() {
    return (
      <div className={styles.main}>
        <div className={styles.logo}></div>
        <LoginForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect()(Login);
