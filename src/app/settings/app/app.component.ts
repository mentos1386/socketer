import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../../store/store.interface';
import { SETTING_ACTION } from '../settings.reducer';
import { SOCKET_ACTION } from '../../services/socket.reducer';
import { EDITOR_ACTION } from '../../main/editor/editor.reducer';

@Component({
  selector: 'app-settings-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class SettingsAppComponent implements OnInit {

  @select(['settings', 'host'])
  host$: Observable<string>;

  constructor(protected ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {
  }

  clearSettings() {
    this.ngRedux.dispatch({
      type: SETTING_ACTION.PURGE,
    });
    this.ngRedux.dispatch({
      type: SOCKET_ACTION.PURGE,
    });
    this.ngRedux.dispatch({
      type: EDITOR_ACTION.PURGE,
    });
  }

}
