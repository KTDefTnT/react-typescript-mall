import { Effect, Reducer } from 'umi';

interface UserModelType {
  namespace: string;
  state: {
    currentUser: CurrentUserState;
    userDetail: UserDetailState;
  };
  effects: {
    fetchCurrentUser: Effect;
    login: Effect;
    getDetail: Effect;
    logout: Effect;
  };
  reducers: {
    saveUser: Reducer;
    clearUser: Reducer;
  };
}
interface UserModelState {
  currentUser: CurrentUserState;
  userDetail: UserDetailState;
}
interface CurrentUserState {
  status?: number;
  name?: string;
  icon?: string;
  userId?: string;
}

interface UserDetailState {
  status?: number;
  id: string;
  name: string;
  icon: string;
  email?: string;
  title?: string;
  tags?: { key: string; label: string }[];
  country?: string;
  address?: string;
  phone?: string;
}

export { UserModelType, UserModelState };
