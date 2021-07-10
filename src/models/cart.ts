const CartModel: CartModelType = {
  namespace: 'cart',
  state: {
    data: [],
  },
  effects: {},
  reducers: {
    saveCart(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
