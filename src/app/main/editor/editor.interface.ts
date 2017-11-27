export interface IEditorState {
  tabs: IEditorTab[];
}

export interface IEditorTab {
  id: number;
  room: string;
  message: any;
}

