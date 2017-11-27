import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { SocketService } from '../../../services/socket.service';
import { IEditorTab } from '../editor.interface';
import { ActivatedRoute, Params } from '@angular/router';
import { IAppState } from '../../../store/store.interface';
import { EDITOR_ACTION } from '../editor.reducer';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class EditorViewComponent {

  @select(['socket', 'connected'])
  connected$: Observable<boolean>;

  @select(['editor', 'tabs'])
  tabs$: Observable<IEditorTab[]>;

  tab: IEditorTab;

  room = new FormControl();
  message = new FormControl();

  constructor(
    protected socketService: SocketService,
    private activatedRoute: ActivatedRoute,
    private ngRedux: NgRedux<IAppState>,
  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (this.tab) {
        this.saveTab();
      }

      this.tabs$.subscribe((tabs) => {
        const match = tabs.filter(tab => tab.id === parseInt(params.id, 10));

        if (!match.length) throw new Error('Tab not found!');

        this.tab = match[0];
        this.message.setValue(this.tab.message);
        this.room.setValue(this.tab.room);

        this.room.valueChanges.debounceTime(500).subscribe(() => this.saveTab());
        this.message.valueChanges.debounceTime(500).subscribe(() => this.saveTab());
      });
    });
  }

  sendMessage() {
    let message = this.message.value;

    try {
      message = JSON.parse(message);
    } catch (e) {

    }

    this.socketService.sendMessage(this.room.value, message);
  }

  joinRoom() {
    this.socketService.joinRoom(this.room.value);
  }

  saveTab() {
    this.ngRedux.dispatch({
      type: EDITOR_ACTION.UPDATE_TAB,
      payload: <IEditorTab> {
        id: this.tab.id,
        room: this.room.value,
        message: this.message.value,
      },
    });
  }

}
