import { Reducer } from 'redux';
import { ISocketState } from './socket.interface';

const INITIAL_STATE: ISocketState = {
  connected: false,
  log: [],
  rooms: [],
};

export const SOCKET_ACTION = {
  CONNECTED: 'CONNECTED',
  DISCONNECTED: 'DISCONNECTED',
  LOG: 'LOG',
  JOINED_ROOM: 'JOINED_ROOM',
  PURGE: 'PURGE',
  PURGE_LOG: 'PURGE_LOG',
};

export const socketReducer: Reducer<ISocketState> = (
  state: ISocketState = INITIAL_STATE,
  action: any,
): ISocketState => {
  switch (action.type) {
    case SOCKET_ACTION.CONNECTED:
      return Object.assign({}, state, { connected: true });
    case SOCKET_ACTION.DISCONNECTED:
      return Object.assign({}, state, { connected: false });
    case SOCKET_ACTION.LOG:
      action.payload.date = new Date();
      return Object.assign({}, state, { log: [action.payload, ...state.log] });
    case SOCKET_ACTION.JOINED_ROOM:
      return Object.assign({}, state, { rooms: [action.payload, ...state.rooms] });
    case SOCKET_ACTION.PURGE:
      return INITIAL_STATE;
    case SOCKET_ACTION.PURGE_LOG:
      return Object.assign({}, state, { log: [] });
  }
  return state;
};
