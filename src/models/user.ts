import { UserModelType } from '@/@types/user';
import { login } from '@/services/login';
import { getCurrentUser } from '@/services/user';

const UserModel: UserModelType = {
  namespace: 'user',
  state: {
    currentUser: {},
  },
  effects: {
    *fetchCurrentUser(action, { call, put }) {
      const userInfo = yield call(getCurrentUser);
      yield put({
        type: 'saveUser',
        payload: { currentUser: { ...userInfo } },
      });
    },
    *login({ payload }, { call, put }) {
      const userInfo = yield call(login, payload);
      yield put({
        type: 'saveUser',
        payload: { currentUser: { ...userInfo } },
      });
    },
  },
  reducers: {
    saveUser(state, action) {
      console.log('reducer', { ...state, ...action.payload });
      return { ...state, ...action.payload };
    },
  },
};

export default UserModel;
