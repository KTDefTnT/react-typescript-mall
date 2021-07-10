import React from 'react';
import classnames from 'classnames';
import { Carousel, Card } from 'antd-mobile';

import styles from './index.less';

interface CarouselPageProps {
  imgs: string[];
}

const CarouselPage: React.FC<CarouselPageProps> = ({ imgs }) => {
  return (
    <Card full>
      <Carousel autoplay={true} infinite className={styles.main}>
        {imgs.map((img, index) => (
          <a
            key={index}
            className={classnames(styles.carouselItem, 'xyCenter')}
          >
            <img
              src={img}
              alt="图片"
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
              }}
            />
          </a>
        ))}
      </Carousel>
    </Card>
  );
};

export default CarouselPage;
