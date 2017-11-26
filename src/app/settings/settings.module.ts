import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { SettingsAppComponent } from './app/app.component';
import { SettingsConnectionComponent } from './connection/connection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgReduxModule } from '@angular-redux/store';

@NgModule({
  imports: [
    ReactiveFormsModule,
    NgReduxModule,
    CommonModule,
  ],
  declarations: [
    SettingsComponent,
    SettingsAppComponent,
    SettingsConnectionComponent,
  ],
  exports: [
    SettingsComponent,
    SettingsAppComponent,
    SettingsConnectionComponent,
  ],
})
export class SettingsModule {
}
