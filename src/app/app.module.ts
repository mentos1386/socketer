import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { LogComponent } from './log/log.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { StoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    LogComponent,
    NavigatorComponent,
    NavbarComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgReduxModule,
    StoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
