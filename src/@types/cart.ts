import { Reducer } from 'umi';
import { ProductType } from './product';

export interface CartModelType {
  namespace: string;
  state: CartModelState;
  effects: {};
  reducers: {
    saveCart: Reducer;
  };
}

export interface CartModelState {
  data: CartProductType[];
}

export interface CartProductType extends ProductType {
  count: number;
  checked: boolean;
}
