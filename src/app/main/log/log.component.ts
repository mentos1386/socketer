import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { ISocketLog } from '../../services/socket.interface';
import { IAppState } from '../../store/store.interface';
import { SOCKET_ACTION } from '../../services/socket.reducer';

@Component({
  selector: 'app-main-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {

  @select(['socket', 'log'])
  log$: Observable<ISocketLog[]>;

  constructor(protected ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {
  }

  isTypeMessage(type: string) {
    return type === 'SENT' || type === 'RECEIVED';
  }

  clearLog() {
    this.ngRedux.dispatch({
      type: SOCKET_ACTION.PURGE_LOG,
    });
  }
}
