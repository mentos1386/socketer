import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../../store/store.interface';
import { SETTING_ACTION } from '../settings.reducer';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-settings-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss'],
})
export class SettingsConnectionComponent implements OnInit {


  @select(['settings', 'host'])
  host$: Observable<string>;

  host = new FormControl();


  constructor(protected ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {
  }

  saveSettings() {
    this.ngRedux.dispatch({
      type: SETTING_ACTION.SAVE,
      payload: this.host.value,
    });
  }

}
