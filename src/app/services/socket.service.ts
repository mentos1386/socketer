import { Injectable } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { ISettingsState } from '../settings/settings.interface';
import { IAppState } from '../store/store.interface';
import * as io from 'socket.io-client';
import { SOCKET_ACTION } from './socket.reducer';
import { ISocketLog, ISocketMessage, ISocketState } from './socket.interface';

@Injectable()
export class SocketService {

  @select(['settings'])
  settings$: Observable<ISettingsState>;
  settings: ISettingsState;

  @select(['socket'])
  socketData$: Observable<ISocketState>;
  socketData: ISocketState;

  socket: SocketIOClient.Socket;

  constructor(protected ngRedux: NgRedux<IAppState>) {
    this.settings$
    .subscribe((settings) => this.settings = settings);

    this.socketData$
    .subscribe(data => this.socketData = data);
  }

  connect() {
    if (this.socket) this.disconnect();
    this.socket = io.connect(this.settings.host);
    this.initListeners();
  }

  disconnect() {
    this.socket.disconnect();
  }

  /**
   * Send message
   * @param {string} room
   * @param message
   */
  sendMessage(room: string, message: any) {
    this.socket.emit(room, message);
    this.joinRoom(room);

    this.ngRedux.dispatch({
      type: SOCKET_ACTION.LOG,
      payload: <ISocketLog>{
        type: 'SENT',
        data: {
          room,
          message,
        },
      },
    });
  }

  joinRoom(room: string) {
    // If we aren't yet listening on the room, start now
    if (this.socketData.rooms.indexOf(room) < 0) {
      this.listenOnRoom(room);

      this.ngRedux.dispatch({
        type: SOCKET_ACTION.JOINED_ROOM,
        payload: room,
      });
    }
  }

  private listenOnRoom(room: string) {
    this.socket.on(room, (message) => {
      this.ngRedux.dispatch({
        type: SOCKET_ACTION.LOG,
        payload: <ISocketLog>{
          type: 'RECEIVED',
          data: {
            room,
            message,
          },
        },
      });
    });
  }

  private initListeners() {
    this.socket.on('connect', () => {
      this.ngRedux.dispatch({
        type: SOCKET_ACTION.LOG,
        payload: <ISocketLog>{
          type: 'CONNECTED',
        },
      });
      this.ngRedux.dispatch({
        type: SOCKET_ACTION.CONNECTED,
      });
      // Try to re-join rooms
      this.socketData.rooms.forEach(room => this.listenOnRoom(room));
    });

    this.socket.on('disconnect', () => {
      this.ngRedux.dispatch({
        type: SOCKET_ACTION.LOG,
        payload: <ISocketLog> {
          type: 'DISCONNECTED',
        },
      });
      this.ngRedux.dispatch({
        type: SOCKET_ACTION.DISCONNECTED,
      });
    });
  }

}
