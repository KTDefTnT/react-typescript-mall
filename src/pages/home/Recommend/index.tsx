import { getRecommendList } from '@/services/home';
import { useEffect, useState } from 'react';
import { WingBlank, Card, Grid } from 'antd-mobile';
import { Link } from 'umi';
import { DataItem } from 'antd-mobile/lib/grid/PropsType';

import styles from './index.less';

export default function Recommend() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getRecommendList().then((resp) => {
      setList(resp.list.data);
    });
  }, []);

  return (
    <WingBlank size="lg">
      <Card className={styles.main}>
        <Card.Header title="好物推荐" />
        <Card.Body>
          <Grid
            data={list.slice(0, 6)}
            columnNum={3}
            renderItem={(data) => node({ ...data })}
          />
        </Card.Body>
      </Card>
      <Card className={styles.main1}>
        <Card.Header title="猜你喜欢" />
        <Card.Body>
          <Grid
            data={list.slice(6)}
            columnNum={2}
            renderItem={(data) => node({ ...data })}
          />
        </Card.Body>
      </Card>
    </WingBlank>
  );
}

function node({ id, title, img }: DataItem) {
  return (
    <Link to={'/product/' + id}>
      <div className="oneRow">{title}</div>
      <img src={img} alt="" className={styles.nodeImg} />
    </Link>
  );
}
