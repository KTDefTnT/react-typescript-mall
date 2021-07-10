import React from 'react';
import { ListView, WingBlank, Icon } from 'antd-mobile';
import Tags from '@/components/Tags/index';
import { PaginationType } from '@/@types/search';
import { Link } from 'umi';
import classnames from 'classnames';
import styles from './index.less';
import { ProductType } from '@/@types/product';

interface ListProps {
  data: ProductType[];
  pagination: PaginationType;
  handleQuery: Function;
}

const List: React.FC<ListProps> = ({ data, pagination, handleQuery }) => {
  const dataSource = new ListView.DataSource({
    rowHasChanged: (r1: any, r2: any) => r1 !== r2,
  });

  const onEndReached = () => {
    if (pagination.totalPage > pagination.pageNo) {
      handleQuery({
        pageNo: pagination.pageNo + 1,
        pageSize: pagination.pageSize,
        searchKey: pagination.searchKey,
      });
    }
  };

  return (
    <div className={styles.main}>
      {data.length > 0 ? (
        <ListView
          dataSource={dataSource.cloneWithRows(data)}
          pageSize={5}
          initialListSize={5}
          useBodyScroll={true}
          onEndReached={onEndReached}
          onEndReachedThreshold={20}
          renderRow={(item) => Node(item)}
          renderFooter={() => (
            <div className="txtCenter">
              {pagination.pageNo <= pagination.totalPage - 1 ? (
                <Icon type="loading" />
              ) : (
                <div>加载完毕</div>
              )}
            </div>
          )}
        />
      ) : (
        <div className="txtCenter font14">暂无数据</div>
      )}
    </div>
  );
};

function Node({ img, title, price, tags, id }: ProductType) {
  return (
    <Link className={styles.node} to={'/product/' + id}>
      <div className={classnames(styles.imgBox, 'xyCenter')}>
        <img src={img} />
      </div>
      <WingBlank size="lg">
        <div className="twoRows">{title}</div>
        <div className={classnames(styles.priceBox, 'font16')}>
          <span className={styles.yuan}>￥</span>
          <span className={styles.price}>{price}</span>
        </div>
        <Tags tags={tags} />
      </WingBlank>
    </Link>
  );
}

export default List;
