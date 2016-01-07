// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import * as CodeMirror from 'codemirror';
import 'codemirror/mode/meta';
import 'codemirror/lib/codemirror.css';


import * as dmp from 'diff-match-patch';

import {
  Message
} from 'phosphor-messaging';

import {
  IChangedArgs
} from 'phosphor-properties';

import {
  ISignal, Signal
} from 'phosphor-signaling';

import {
  ResizeMessage, Widget
} from 'phosphor-widget';

import {
  Panel
} from 'phosphor-panel';

import {
  IInputAreaViewModel
} from './InputAreaViewModel';

import {
  CodeMirrorWidget, IEditorModel
} from 'jupyter-js-editor';

/**
 * An input area widget, which hosts an editor widget.
 */
export
class InputAreaWidget extends Panel {

  /**
   * Construct an input area widget.
   */
  constructor(model: IInputAreaViewModel) {
    super();
    this.addClass('jp-InputAreaWidget');
    this._model = model;
    this.updateTextEditor(model.textEditor);
    this.updateCollapsed(model.collapsed);
    this.updatePromptNumber(model.promptNumber);
    this.updateExecutionCount(model.executionCount);
    model.stateChanged.connect(this._modelUpdate, this);
  }

  /**
   * Update the text editor model, creating a new text editor
   * widget and detaching the old one.
   */
  updateTextEditor(editor: IEditorModel) {
    if (this.childCount() > 0) {
      this.childAt(0).dispose();
    }
    this.addChild(new CodeMirrorWidget(editor));
  }

  updateCollapsed(collapsed: boolean) {

  }

  updatePromptNumber(promptNumber: number) {

  }

  updateExecutionCount(executionCount: number) {

  }

  /**
   * Change handler for model updates.
   */
  private _modelUpdate(sender: IInputAreaViewModel, args: IChangedArgs<any>) {
    switch(args.name) {
    case 'textEditor':
      this.updateTextEditor(args.newValue);
      break;
    case 'collapsed':
      this.updateCollapsed(args.newValue);
      break;
    case 'promptNumber':
      this.updatePromptNumber(args.newValue);
      break;
    case 'executionCount':
      this.updateExecutionCount(args.newValue);
      break;
    }
  }

  private _model: IInputAreaViewModel;
}
