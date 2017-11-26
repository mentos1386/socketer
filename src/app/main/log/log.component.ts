import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { ISocketMessage } from '../../services/socket.interface';

@Component({
  selector: 'app-main-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {

  @select(['socket', 'messages'])
  messages$: Observable<ISocketMessage[]>;

  constructor() {
  }

  ngOnInit() {
  }

}
