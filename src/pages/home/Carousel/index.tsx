import { Carousel } from 'antd-mobile';
import styles from './index.less';

const carouselImgs = [
  {
    src: 'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg',
    alt: '女装',
  },
  {
    src: 'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg',
    alt: '男装',
  },

  {
    src: '//gw.alicdn.com/imgextra/i2/193/O1CN011QYq3d1DIR21KZdje_!!193-0-lubanu.jpg',
    alt: '鞋',
  },
  {
    src: '//img.alicdn.com/imgextra/i1/158/O1CN012x8yNc1D2PAaNb7lG_!!158-0-luban.jpg',
    alt: '包',
  },
];

const CarouselPage = () => {
  return (
    <Carousel infinite className={styles.main} autoplay={true}>
      {carouselImgs.map((item) => (
        <a href={item.src} key={item.src} className={styles.carouselItem}>
          <img src={item.src} alt={item.alt} />
        </a>
      ))}
    </Carousel>
  );
};

export default CarouselPage;
