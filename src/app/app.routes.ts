import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SettingsComponent } from './settings/settings.component';

export const appRoutes = [
  { path: '', component: MainComponent },
  { path: 'settings', component: SettingsComponent },
];
