import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';
import { settingsReducer } from '../settings/settings.reducer';
import { socketReducer } from '../services/socket.reducer';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { editorReducer } from '../main/editor/editor.reducer';

// Persistence config
const config = {
  storage,
  key: 'primary',
};

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
  defaultFormReducer(),
  persistCombineReducers(config, {
    router: routerReducer,
    settings: settingsReducer,
    socket: socketReducer,
    editor: editorReducer,
  }));
