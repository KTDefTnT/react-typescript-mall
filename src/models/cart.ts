import { CartModelType } from '@/@types/cart';

const CartModel: CartModelType = {
  namespace: 'cart',
  state: {
    data: [],
  },
  effects: {},
  reducers: {
    saveCart(state, action) {
      console.log('action', action);
      return { ...state, ...action.payload };
    },
  },
};

export default CartModel;
