import { Dispatch, Location } from 'umi';
import { UserModelState } from './user';

interface ConnectProps {
  dispatch: Dispatch;
  location: Location & { state: { from: string } };
}

interface ConnectState {
  user: UserModelState;
}

export { ConnectProps, ConnectState };
