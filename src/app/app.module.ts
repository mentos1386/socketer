import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { StoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
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
