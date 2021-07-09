import { Component } from 'react';
import Arc from '@/components/Arc';
import SearchInput from './SearchInput';
import Carousel from './Carousel';
import NavTable from './NavTable';
import Recommend from './Recommend';

import styles from './index.less';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.main}>
        <SearchInput />
        <Carousel />
        <Arc />
        <NavTable />
        <Recommend />
      </div>
    );
  }
}
