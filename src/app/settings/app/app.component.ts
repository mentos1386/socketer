import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../../store/store.interface';
import { SETTING_ACTION } from '../settings.reducer';

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
  }

}
