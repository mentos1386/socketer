import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { LogComponent } from './log/log.component';
import { EditorComponent } from './editor/editor.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgReduxModule } from '@angular-redux/store';
import { SocketService } from '../services/socket.service';

@NgModule({
  imports: [
    ReactiveFormsModule,
    NgReduxModule,
    CommonModule,
  ],
  declarations: [
    MainComponent,
    NavigatorComponent,
    LogComponent,
    EditorComponent,
  ],
  exports: [
    MainComponent,
    NavigatorComponent,
    LogComponent,
    EditorComponent,
  ],
  providers: [SocketService],
})
export class MainModule {
}
