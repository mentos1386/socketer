export interface ISocketState {
  connected: boolean;
  messages: ISocketMessage[];
  rooms: string[];
}

export interface ISocketMessage {
  type: 'SENT' | 'RECEIVED';
  room: string;
  message: any;
}
