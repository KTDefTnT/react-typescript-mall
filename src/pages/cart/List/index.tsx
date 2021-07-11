import React from 'react';
import classnames from 'classnames';
import { Card, Checkbox, Stepper } from 'antd-mobile';
import { CartProductType, UpdateProductType } from '@/@types/cart';

import styles from './index.less';

interface ListProps {
  data: CartProductType[];
  updateProduct: (newState: UpdateProductType) => void;
}

const List: React.FC<ListProps> = ({ data, updateProduct }) => {
  return (
    <Card full className={styles.main}>
      {data.length > 0 ? (
        data.map((item: CartProductType, index: number) => (
          <Node
            key={index}
            index={index}
            {...item}
            updateProduct={updateProduct}
          />
        ))
      ) : (
        <div className="txtCenter">购物车为空，快去选购吧！</div>
      )}
    </Card>
  );
};

const CheckBoxItem = Checkbox.CheckboxItem;
function Node({
  checked,
  id,
  index,
  count,
  img,
  title,
  price,
  updateProduct,
}: CartProductType & {
  updateProduct: (newState: UpdateProductType) => void;
  index: number;
}) {
  return (
    <CheckBoxItem
      checked={checked}
      onChange={() => updateProduct({ id, checked: !checked, index, count })}
    >
      <div className={styles.node}>
        <div className={styles.imgBox}>
          <img src={img} alt={title} />
        </div>
        <div className={styles.right}>
          <div className={'twoRows'}>{title}</div>
          <div className={styles.info}>
            <p className={classnames('red')}>{price}</p>
            <Stepper
              onChange={(stepperCount: any) =>
                updateProduct({ id, checked, index, count: stepperCount })
              }
              className={styles.stepper}
              min={0}
              showNumber
              defaultValue={count}
            />
          </div>
        </div>
      </div>
    </CheckBoxItem>
  );
}

export default List;
