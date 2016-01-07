// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  IChangedArgs, Property
} from 'phosphor-properties';

import {
  ISignal, Signal
} from 'phosphor-signaling';

import {
  IEditorModel, EditorModel
} from 'jupyter-js-editor';

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
  textEditor: IEditorModel;

  /**
   * Whether the input area should be collapsed (hidden) or expanded.
   * 
   * // TODO: this should probably be a property on the cell, not the input area.
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
  * A property descriptor containing the text editor viewmodel.
  *
  * **See also:** [[textEditor]]
  */
  static textEditorProperty = new Property<InputAreaViewModel, EditorModel>({
    name: 'textEditor',
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

  /**
   * Get the text editor viewmodel.
   *
   * #### Notes
   * This is a pure delegate to the [[textEditorProperty]].
   */
  get textEditor() {
    return InputAreaViewModel.textEditorProperty.get(this);
  }
  
  /**
   * Set the text editor viewmodel.
   *
   * #### Notes
   * This is a pure delegate to the [[textEditorProperty]].
   */
  set textEditor(value: EditorModel) {
    InputAreaViewModel.textEditorProperty.set(this, value);
  }
}
