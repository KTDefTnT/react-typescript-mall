import { Effect, Reducer } from 'umi';
import {} from '../.umi/plugin-dva/connect';

interface UserModelType {
  namespace: string;
  state: {
    currentUser: CurrentUserState;
  };
  effects: {
    fetchCurrentUser: Effect;
    login: Effect;
  };
  reducers: {
    saveUser: Reducer;
  };
}

interface UserModelState {
  currentUser: CurrentUserState;
}

interface CurrentUserState {
  status?: number;
  name?: string;
  icon?: string;
  userId?: string;
}

export { UserModelType, UserModelState };
