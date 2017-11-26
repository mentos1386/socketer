import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-main-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent implements OnInit {

  @select(['socket', 'rooms'])
  rooms$: Observable<string[]>;

  constructor() {
  }

  ngOnInit() {
  }

}
