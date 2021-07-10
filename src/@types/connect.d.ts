import { Dispatch, Location } from 'umi';
import { UserModelState } from './user';
import { CartModelState } from './cart';

interface ConnectProps {
  dispatch: Dispatch;
  location?: Location & { state: { from: string } };
}

interface ConnectState {
  user: UserModelState;
  cart: CartModelState;
}

export { ConnectProps, ConnectState };
