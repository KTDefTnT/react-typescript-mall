import { Link } from 'umi';
import styles from './index.less';

const SearchInput = () => {
  return (
    <div className={styles.main}>
      <Link to="/search" className={styles.search}>
        <i className="iconfont icon-sousuo" /> 寻找宝贝
      </Link>
    </div>
  );
};

export default SearchInput;
