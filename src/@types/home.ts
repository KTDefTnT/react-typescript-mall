interface NavNodeProps {
  icon: string;
  title: string;
  link: string;
}

interface RecommendNodeProps {
  id: string;
  title: string;
  img: string;
  price: string;
  count: number;
  checked: boolean;
}

export { NavNodeProps, RecommendNodeProps };
