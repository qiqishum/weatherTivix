import {SHARED_STATE_NAME} from './shared.selector';
import {SharedState} from './shared.state';
import {SharedReducer} from './shared.reducer';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
};
