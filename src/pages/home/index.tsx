import { Component } from 'react';
import styles from './index.less';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.title}>Page index</h1>
      </div>
    );
  }
}