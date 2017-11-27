import { Reducer } from 'redux';
import { IEditorState } from './editor.interface';

const INITIAL_STATE: IEditorState = {
  tabs: [],
};

export const EDITOR_ACTION = {
  NEW_TAB: 'NEW_TAB',
  CLOSE_TAB: 'CLOSE_TAB',
  UPDATE_TAB: 'UPDATE_TAB',
  PURGE: 'PURGE',
};

export const editorReducer: Reducer<IEditorState> = (
  state: IEditorState = INITIAL_STATE,
  action: any,
): IEditorState => {
  switch (action.type) {
    case EDITOR_ACTION.NEW_TAB:
      return Object.assign({}, state, { tabs: [...state.tabs, action.payload] });
    case EDITOR_ACTION.CLOSE_TAB:
      return Object.assign(
        {},
        state,
        { tabs: state.tabs.filter(tab => tab.id !== action.payload.id) });
    case EDITOR_ACTION.UPDATE_TAB:
      return Object.assign({}, state, {
        tabs: state.tabs.map((tab) => {
          // Replace old with new
          if (tab.id !== action.payload.id) return tab;
          return action.payload;
        }),
      });
    case EDITOR_ACTION.PURGE:
      return INITIAL_STATE;
  }
  return state;
};
