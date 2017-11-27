import { Routes } from '@angular/router';
import { EditorViewComponent } from './editor/view/view.component';
import { EditorComponent } from './editor/editor.component';
import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'tab/:id',
        component: EditorViewComponent,
      },
    ],
  },
];
