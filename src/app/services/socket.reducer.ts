import { Reducer } from 'redux';
import { ISocketState } from './socket.interface';

const INITIAL_STATE: ISocketState = {
  connected: false,
  messages: [],
  rooms: [],
};

export const SOCKET_ACTION = {
  CONNECTED: 'CONNECTED',
  DISCONNECTED: 'DISCONNECTED',
  MESSAGE: 'MESSAGE',
  JOINED_ROOM: 'JOINED_ROOM',
  PURGE: 'PURGE',
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
    case SOCKET_ACTION.MESSAGE:
      return Object.assign({}, state, { messages: [action.payload, ...state.messages] });
    case SOCKET_ACTION.JOINED_ROOM:
      return Object.assign({}, state, { rooms: [action.payload, ...state.rooms] });
    case SOCKET_ACTION.PURGE:
      return INITIAL_STATE;
  }
  return state;
};
