import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditorComponent } from './main/editor/editor.component';
import { LogComponent } from './main/log/log.component';
import { NavigatorComponent } from './main/navigator/navigator.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { StoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { SettingsComponent } from './settings/settings.component';
import { MainComponent } from './main/main.component';
import { SettingsConnectionComponent } from './settings/connection/connection.component';
import { SettingsAppComponent } from './settings/app/app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainModule } from './main/main.module';
import { SettingsModule } from './settings/settings.module';
import { SocketService } from './services/socket.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgReduxModule,
    StoreModule,
    MainModule,
    SettingsModule,
  ],
  providers: [SocketService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
