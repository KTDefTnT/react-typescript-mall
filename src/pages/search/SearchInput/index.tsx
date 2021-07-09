import React, { useState, useCallback, useEffect, useRef } from 'react';
import { InputItem, Button } from 'antd-mobile';

import styles from './index.less';
import { history } from 'umi';

interface SearchInputProps {
  handleQuery: Function;
}

const SearchInput: React.FC<SearchInputProps> = ({ handleQuery }) => {
  // 进入界面即聚焦
  const inputRef = useRef<any>(null);
  useEffect(() => {
    // componentDidMount
    inputRef.current.focus();
  }, []);

  // 搜索的值
  const [inputValue, setInputValue] = useState<string>('');
  const handleChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  // 搜索状态
  const [searchMode, setSearchMode] = useState<boolean>(false);
  // 若input有值则可搜索，无值则取消返回首页
  useEffect(() => {
    setSearchMode(inputValue !== '');
  }, [inputValue]);

  // 搜索: 有值搜索调用接口  无值【取消】 返回首页
  const handleSearch = useCallback(() => {
    if (searchMode) {
      const val = inputValue.trim();
      // 调用搜索接口
      handleQuery({ searchKey: val, pageNo: 1 });
    } else {
      history.push('/');
    }
  }, [searchMode, inputValue]);

  return (
    <div className={styles.main}>
      <InputItem
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
        clear
        className={styles.searchBar}
      />
      <Button type="primary" className={styles.btn} onClick={handleSearch}>
        {searchMode ? '搜索' : '取消'}
      </Button>
    </div>
  );
};

export default SearchInput;
