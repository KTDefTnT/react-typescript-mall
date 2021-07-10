import { Component } from 'react';
import { IRouteProps } from 'umi';
import classnames from 'classnames';
import { ProductType } from '@/@types/product';
import { getProductById } from '@/services/product';

import { WhiteSpace, Card } from 'antd-mobile';
import Tags from '@/components/Tags';
import Carousel from './Carousel';
import CartAndBuy from './CartAndBuy';

import styles from './[id].less';

export default class Product extends Component<IRouteProps, ProductType> {
  state: ProductType = {
    id: '',
    imgs: [],
    price: '',
    tags: [],
    title: '',
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    getProductById(id).then((resp) => {
      this.setState({
        ...resp.data,
      });
    });
  }

  render() {
    const { imgs, title, price, tags } = this.state;
    return (
      <div className={styles.main}>
        <Carousel imgs={imgs} />
        <WhiteSpace size="lg" />
        <Card full>
          <p className={classnames('red', 'bold')}>￥{price}</p>
          <p className="font14">{title}</p>
          <WhiteSpace size="lg" />
          <Tags tags={tags} />
        </Card>
        <CartAndBuy product={this.state} />
      </div>
    );
  }
}
