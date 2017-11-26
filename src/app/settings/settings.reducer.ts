import { Reducer } from 'redux';
import { ISettingsState } from './settings.interface';

const INITIAL_STATE: ISettingsState = {
  host: '',
};

export const SETTING_ACTION = {
  SAVE: 'SAVE',
  PURGE: 'PURGE',
};

export const settingsReducer: Reducer<ISettingsState> = (
  state: ISettingsState = INITIAL_STATE,
  action: any,
): ISettingsState => {
  switch (action.type) {
    case SETTING_ACTION.SAVE:
      return Object.assign({}, state, { host: action.payload });
    case SETTING_ACTION.PURGE:
      return INITIAL_STATE;
  }
  return state;
};
