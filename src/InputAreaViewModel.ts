// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

'use strict';

import {
  ISignal, Signal
} from 'phosphor-signaling';

import {
  Property
} from 'phosphor-properties';


/**
 * The arguments object emitted with the `stateChanged` signal.
 */
export
interface IChangedArgs<T> {

  /**
   * The name of the attribute being changed.
   */
  name: string,

  /**
   * The old value of the attribute.
   */
  oldValue: T;

  /**
   * The new value of the attribute.
   */
  newValue: T;
}

/**
 * The view model for an input area.
 */
export
interface IInputAreaViewModel {

  /**
   * A signal emitted when state of the input area changes.
   */
  stateChanged: ISignal<IInputAreaViewModel, IChangedArgs<any>>;

  /**
   * The text editor view model.
   */
  textEditor: ITextEditorViewModel;

  /**
   * Whether the input area should be rendered as a read-only display or editable source.
   */
  rendered: boolean;

  /**
   * Whether the input area should be collapsed (hidden) or expanded.
   */
  collapsed: boolean;

  /**
   * The prompt number to display for the input area.
   */
  promptNumber: number;

  /**
   * The execution count.
   */
  executionCount: number;
}

/**
 * The view model for a text editor.
 */
export
interface ITextEditorViewModel {

  /**
   * A signal emitted when state of the text area changes.
   */
  stateChanged: ISignal<ITextEditorViewModel, IChangedArgs<any>>;

  /**
   * The text in the text editor.
   */
  text: string;

  /**
   * The mimetype of the text.
   *
   * #### Notes
   * The mimetype is used to set the syntax highlighting, for example.
   */
  mimetype: string;

  /**
   * Whether to display the line numbers in the text editor.
   */
  lineNumbers: boolean;

  /**
   * Whether the text editor has a fixed maximum height
   *
   * #### Notes
   * If true, the editor has a fixed maximum height.  If false, the editor
   * resizes to fit the content.
   */
  fixedHeight: boolean;
}

/**
 * An implementation of an input area view model.
 */
export
class InputAreaViewModel implements IInputAreaViewModel {

  /**
   * A signal emitted when the state of the model changes.
   *
   * **See also:** [[stateChanged]]
   */
  static stateChangedSignal = new Signal<InputAreaViewModel, IChangedArgs<any>>();

  /**
  * A property descriptor which determines whether the input area should be rendered
  *
  * **See also:** [[rendered]]
  */
  static renderedProperty = new Property<InputAreaViewModel, boolean>({
    name: 'rendered',
    notify: InputAreaViewModel.stateChangedSignal,
  });

  /**
  * A property descriptor which determines whether the input area is collapsed or displayed.
  *
  * **See also:** [[collapsed]]
  */
  static collapsedProperty = new Property<InputAreaViewModel, boolean>({
    name: 'collapsed',
    notify: InputAreaViewModel.stateChangedSignal,
  });

  /**
  * A property descriptor containing the prompt number.
  *
  * **See also:** [[promptNumber]]
  */
  static promptNumberProperty = new Property<InputAreaViewModel, number>({
    name: 'promptNumber',
    notify: InputAreaViewModel.stateChangedSignal,
  });

  /**
  * A property descriptor containing the execution count of the input area.
  *
  * **See also:** [[executionCount]]
  */
  static executionCountProperty = new Property<InputAreaViewModel, number>({
    name: 'executionCount',
    notify: InputAreaViewModel.stateChangedSignal,
  });

  /**
   * A signal emitted when the state of the model changes.
   *
   * #### Notes
   * This is a pure delegate to the [[stateChangedSignal]].
   */
  get stateChanged() {
    return InputAreaViewModel.stateChangedSignal.bind(this);
  }

  /**
   * Get whether the input area should be a rendered representation.
   *
   * #### Notes
   * This is a pure delegate to the [[renderedProperty]].
   */
  get rendered() {
    return InputAreaViewModel.renderedProperty.get(this);
  }

  /**
   * Set whether the input area should be a rendered representation.
   *
   * #### Notes
   * This is a pure delegate to the [[renderedProperty]].
   */
  set rendered(value: boolean) {
    InputAreaViewModel.renderedProperty.set(this, value);
  }


  /**
   * Get whether the input area should be collapsed or displayed.
   *
   * #### Notes
   * This is a pure delegate to the [[collapsedProperty]].
   */
  get collapsed() {
    return InputAreaViewModel.collapsedProperty.get(this);
  }

  /**
   * Set whether the input area should be collapsed or displayed.
   *
   * #### Notes
   * This is a pure delegate to the [[collapsedProperty]].
   */
  set collapsed(value: boolean) {
    InputAreaViewModel.collapsedProperty.set(this, value);
  }

  /**
   * Get the prompt number.
   *
   * #### Notes
   * This is a pure delegate to the [[promptNumberProperty]].
   */
  get promptNumber() {
    return InputAreaViewModel.promptNumberProperty.get(this);
  }

  /**
   * Set the prompt number.
   *
   * #### Notes
   * This is a pure delegate to the [[promptNumberProperty]].
   */
  set promptNumber(value: number) {
    InputAreaViewModel.promptNumberProperty.set(this, value);
  }

  /**
   * Get the execution count of the input area.
   *
   * #### Notes
   * This is a pure delegate to the [[executionCountProperty]].
   */
  get executionCount() {
    return InputAreaViewModel.executionCountProperty.get(this);
  }

  /**
   * Set the execution count of the input area.
   *
   * #### Notes
   * This is a pure delegate to the [[executionCountProperty]].
   */
  set executionCount(value: number) {
    InputAreaViewModel.executionCountProperty.set(this, value);
  }

    textEditor: ITextEditorViewModel;
}

/**
 * An implementation of a text editor view model.
 */
export class TextEditorViewModel implements ITextEditorViewModel {
  /**
   * A signal emitted when the state of the model changes.
   *
   * **See also**: [[stateChanged]]
   */
  static stateChangedSignal = new Signal<TextEditorViewModel, IChangedArgs<any>>();

  /**
  * A property descriptor which contains the text of the editor.
  *
  * **See also:** [[text]]
  */
  static textProperty = new Property<TextEditorViewModel, string>({
    name: 'text',
    notify: TextEditorViewModel.stateChangedSignal,
  });

  /**
  * A property descriptor which contains the mimetype of the editor contents.
  *
  * #### Notes
  * The mimetype is used to determine the syntax highlighting, for example.
  *
  * **See also:** [[mimetype]]
  */
  static mimetypeProperty = new Property<TextEditorViewModel, string>({
    name: 'mimetype',
    notify: TextEditorViewModel.stateChangedSignal,
  });

  /**
  * A property descriptor which determines whether the line numbers should be displayed.
  *
  * **See also:** [[lineNumbers]]
  */
  static lineNumbersProperty = new Property<TextEditorViewModel, boolean>({
    name: 'lineNumbers',
    notify: TextEditorViewModel.stateChangedSignal,
  });

  /**
  * A property descriptor which determines whether the editor height should be constrained.
  *
  * **See also:** [[fixedHeight]]
  */
  static fixedHeightProperty = new Property<TextEditorViewModel, boolean>({
    name: 'fixedHeight',
    notify: TextEditorViewModel.stateChangedSignal,
  });


  /**
   * A signal emitted when the state of the model changes.
   *
   * #### Notes
   * This is a pure delegate to the [[stateChangedSignal]].
   */
  get stateChanged() {
    return TextEditorViewModel.stateChangedSignal.bind(this);
  }

  /**
   * Get the text of the editor.
   *
   * #### Notes
   * This is a pure delegate to the [[textProperty]].
   */
  get text() {
    return TextEditorViewModel.textProperty.get(this);
  }

  /**
   * Set the text of the editor.
   *
   * #### Notes
   * This is a pure delegate to the [[textProperty]].
   */
  set text(value: string) {
    TextEditorViewModel.textProperty.set(this, value);
  }

  /**
   * Get the mimetype of the editor contents.
   *
   * #### Notes
   * This is a pure delegate to the [[mimetypeProperty]].
   */
  get mimetype() {
    return TextEditorViewModel.mimetypeProperty.get(this);
  }

  /**
   * Set the mimetype of the editor contents.
   *
   * #### Notes
   * This is a pure delegate to the [[mimetypeProperty]].
   */
  set mimetype(value: string) {
    TextEditorViewModel.mimetypeProperty.set(this, value);
  }

  /**
   * Get whether the line numbers should be displayed in the text editor.
   *
   * #### Notes
   * This is a pure delegate to the [[lineNumbersProperty]].
   */
  get lineNumbers() {
    return TextEditorViewModel.lineNumbersProperty.get(this);
  }

  /**
   * Set whether the line numbers should be displayed in the text editor.
   *
   * #### Notes
   * This is a pure delegate to the [[lineNumbersProperty]].
   */
  set lineNumbers(value: boolean) {
    TextEditorViewModel.lineNumbersProperty.set(this, value);
  }

  /**
   * Get whether the editor height should be constrained.
   *
   * #### Notes
   * This is a pure delegate to the [[fixedHeightProperty]].
   */
  get fixedHeight() {
    return TextEditorViewModel.fixedHeightProperty.get(this);
  }

  /**
   * Set whether the editor height should be constrained.
   *
   * #### Notes
   * This is a pure delegate to the [[fixedHeightProperty]].
   */
  set fixedHeight(value: boolean) {
    TextEditorViewModel.fixedHeightProperty.set(this, value);
  }
}

