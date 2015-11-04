

/**
 * The arguments object emitted with the `stateChanged` signal.
 */
export
interface IChangedArgs<T> {
  name: string,
  oldValue: T;
  newValue: T;
}


export 
interface IInputAreaViewModel {

  /**
   * A signal emitted when state of the input area changes.
   */
  stateChanged: ISignal<IInputAreaViewModel, IChangedArgs<any>>;

  textEditor: ITextEditorViewModel;

  rendered: boolean; // whether to render the input area (or providing an editable input area)
  collapsed: boolean;

  // TODO: Brian is going through the code to make sure we capture the right
  // information in promptNumber and executionCount
  promptNumber: number;
  executionCount: number;
  //think about storing dates for both of the above (and timestamp?).
}


export 
interface ITextEditorViewModel {

  /**
   * A signal emitted when state of the text area changes.
   */
  stateChanged: ISignal<ITextEditorViewModel, IChangedArgs<any>>;

  text: string;
  // Eventually add an IObservableString or some other rich object
  mimetype: string;
  lineNumbers: boolean;
  scrolled: boolean; // if true, fixed-height editor; if false, auto-expanding editor
}
