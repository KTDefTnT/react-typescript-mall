import { Reducer } from 'umi';
import { ProductType } from './product';

interface CartModelType {
  namespace: string;
  state: CartState;
  effects: {};
  reducers: {
    saveCart: Reducer;
  };
}

interface CartState {
  data: CartProductType[];
}

interface CartProductType extends ProductType {
  count: number;
  checked: boolean;
}

export { CartModelType, CartProductType, CartState };
