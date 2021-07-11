import React, { useEffect, useState } from 'react';
import { Checkbox, Button } from 'antd-mobile';
import styles from './index.less';
import { CartProductType } from '@/@types/cart';
interface PayBarProps {
  data: CartProductType[];
  checkAllChange: (allChecked: boolean) => void;
  goPay: () => void;
}

const CheckBoxItem = Checkbox.CheckboxItem;

const payBar: React.FC<PayBarProps> = ({ data, checkAllChange, goPay }) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [checkedAll, setCheckedAll] = useState<boolean>(data.length > 0);

  useEffect(() => {
    let allPrice = 0,
      allCount = 0;
    setCheckedAll(data.length > 0);
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      // 必须全部选中才选中全部
      setCheckedAll((prevCheckAll) => prevCheckAll && item.checked);
      if (item.checked) {
        allPrice += item.count * Number(item.price);
        allCount += Number(item.count);
      }
    }
    setTotalPrice(allPrice);
    setCount(allCount);
  }, [data]);

  // react中的数据需要引起视图变化，
  // 必须将数据定义在 state的，使用useState进行视图更新
  // let totalPrice=0,count=0,checkedAll = data.length > 0;
  // useEffect(() => {
  //   for (let i = 0; i < data.length; i++) {
  //     let item = data[i];
  //     // 必须全部选中才选中全部
  //     checkedAll = checkedAll && item.checked;
  //     if (item.checked) {
  //       totalPrice += item.count * item.price;
  //       console.log('inner', totalPrice);
  //       count += Number(item.count);
  //     }
  //   }
  // }, [data]);
  // console.log('out', totalPrice);
  // setTimeout(() => {
  //   console.log('out---setTimeout', totalPrice);
  // }, 100);

  return (
    <div className={styles.main}>
      <CheckBoxItem
        className={styles.checkBox}
        checked={checkedAll}
        onChange={() => checkAllChange(!checkedAll)}
      >
        全选
      </CheckBoxItem>
      <div className={styles.total}>合计: ￥{totalPrice.toFixed(2)}</div>
      <Button
        type="warning"
        size="small"
        className={styles.btn}
        onClick={goPay}
      >
        去结算({count})
      </Button>
    </div>
  );
};

export default payBar;
