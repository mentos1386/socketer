import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {

  room = new FormControl();
  message = new FormControl();


  constructor(protected socketService: SocketService) {
  }

  ngOnInit() {
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

}
