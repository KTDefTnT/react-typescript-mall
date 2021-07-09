import { UserModelType } from '@/@types/user';
import { login, logout } from '@/services/login';
import { getCurrentUser, getUserDetail } from '@/services/user';

const UserModel: UserModelType = {
  namespace: 'user',
  state: {
    currentUser: {},
    userDetail: { id: '', name: '', icon: '' },
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
    *getDetail(action, { call, put }) {
      const userDetail = yield call(getUserDetail);
      console.log('getDetail', userDetail);
      yield put({ type: 'saveUser', payload: { userDetail } });
    },
    *logout(action, { call, put }) {
      yield call(logout);
      yield put({ type: 'clearUser' });
    },
  },
  reducers: {
    saveUser(state, action) {
      return { ...state, ...action.payload };
    },
    clearUser(state, action) {
      return { currentUser: {}, userDetail: { id: '', name: '', icon: '' } };
    },
  },
};

export default UserModel;
