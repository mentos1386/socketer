import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from '@angular-redux/store';
import { Router } from '@angular/router';
import { IEditorTab } from './editor.interface';
import { IAppState } from '../../store/store.interface';
import { EDITOR_ACTION } from './editor.reducer';

@Component({
  selector: 'app-main-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {

  @select(['editor', 'tabs'])
  tabs$: Observable<IEditorTab[]>;

  constructor(private ngRedux: NgRedux<IAppState>, private router: Router) {
  }

  ngOnInit() {
  }

  newTab() {
    const tab = <IEditorTab> {
      id: Math.floor(Math.random() * 1000),
      room: '',
      message: '',
    };
    this.ngRedux.dispatch({
      type: EDITOR_ACTION.NEW_TAB,
      payload: tab,
    });
    this.router.navigate(['tab', tab.id]);
  }

}
