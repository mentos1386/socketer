export interface ISocketState {
  connected: boolean;
  log: ISocketLog[];
  rooms: string[];
}

export interface ISocketLog {
  type: 'SENT' | 'RECEIVED' | 'CONNECTED' | 'DISCONNECTED';
  data: ISocketMessage | any;
  date?: Date;
}

export interface ISocketMessage {
  room: string;
  message: any;
}
