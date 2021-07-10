import React from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import styles from './index.less';
import classnames from 'classnames';
import { ProductType } from '@/@types/product';

interface ListNodeProps {
  data: ProductType[];
}

const ListNode: React.FC<ListNodeProps> = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <Card className={styles.main}>
            <div className={styles.imgBox}>
              <img src={item.img} alt={item.title} />
            </div>
            <div className={styles.right}>
              <div className={classnames('twoRows')}>{item.title}</div>
              <div className={styles.info}>
                <p className={classnames('red', 'font14')}>￥{item.price}</p>
                <span className="font12">x {item.count}</span>
              </div>
            </div>
          </Card>
          <WhiteSpace size="sm" />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ListNode;
