import { MainComponent } from './main/main.component';
import { SettingsComponent } from './settings/settings.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  { path: 'settings', component: SettingsComponent },
];
