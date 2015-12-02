// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import * as CodeMirror from 'codemirror';


/*
 * Importing css directly from codemirror doesn't work well with browserify
 * see https://www.npmjs.com/package/browserify-css#1-how-do-i-include-css-files-located-inside-the-node-modules-folder
 *
 * So instead of doing this:
 * import 'codemirror/lib/codemirror.css';
 * we use a css import rule in a local css file (see below).
 * Ideally, we *would* import directly from codemirror, since the css import
 * exposes the detail that codemirror is required as a node dependency.
 *
 * TODO: change the tests to use systemjs to import modules instead of browserify, then
 * change the css back to just directly importing codemirror css.
 */
import './InputAreaWidget.css';

import 'codemirror/mode/meta';

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
  ResizeMessage, Widget, Panel
} from 'phosphor-widget';

import {
  IInputAreaViewModel, ITextEditorViewModel
} from './InputAreaViewModel';


let diffMatchPatch = new dmp.diff_match_patch()


/**
 * A widget which hosts a CodeMirror editor.
 */
export
class CodeMirrorWidget extends Widget {

  /**
   * Construct a CodeMirror widget.
   */
  constructor(model: ITextEditorViewModel) {
    super();
    this.addClass('jp-CodeMirrorWidget');
    this._model = model;
    this._editor = CodeMirror(this.node);
    this.updateMimetype(model.mimetype);
    this.updateLineNumbers(model.lineNumbers);
    this.updateFixedHeight(model.fixedHeight);
    this.updateText(model.text);

    this._editor.on('change', (instance, change) => {
      this._model.text = this._editor.getDoc().getValue();
    });
    model.stateChanged.connect(this.onModelStateChanged, this);
  }

  /**
   * Update whether the editor has a fixed maximum height.
   */
  protected updateFixedHeight(fixedHeight: boolean) {
    this.toggleClass('jp-CodeMirroWidget-fixedHeight', fixedHeight);
  }

  /**
   * Update the text in the widget.
   *
   * #### Notes
   * This function attempts to restore the cursor to the correct
   * place by using the bitap algorithm to find the corresponding
   * position of the cursor in the new text.
   */
  protected updateText(text: string) {
    let doc = this._editor.getDoc();
    let oldText = doc.getValue();
    if (oldText !== text) {
      // TODO: do something smart with all the selections

      let oldCursor = doc.indexFromPos(doc.getCursor());
      let cursor = 0;
      if (oldCursor === oldText.length) {
        // if the cursor was at the end, keep it at the end
        cursor = text.length;
      } else {
        let fragment = oldText.substr(oldCursor, 10);
        cursor = diffMatchPatch.match_main(text, fragment, oldCursor);
      }

      doc.setValue(text);
      doc.setCursor(doc.posFromIndex(cursor));
    }
  }

  /**
   * Set the mode by giving the mimetype.
   *
   * #### Notes
   * Valid mimetypes are listed in https://github.com/codemirror/CodeMirror/blob/master/mode/meta.js.
   */
  protected updateMimetype(mimetype: string) {
    if (CodeMirror.mimeModes.hasOwnProperty(mimetype)) {
      this._editor.setOption('mode', mimetype);
    } else {
      let info = CodeMirror.findModeByMIME(mimetype);
      if (info) {
        this._loadCodeMirrorMode(info.mode).then(() => {
          this._editor.setOption('mode', mimetype);
        })
      }
    }
  }

  /**
   * Update the line numbers in the editing widget.
   */
  protected updateLineNumbers(lineNumbers: boolean) {
    this._editor.setOption('lineNumbers', lineNumbers);
  }

  /**
   * Handle afterAttach messages.
   */
  protected onAfterAttach(msg: Message): void {
    this._editor.refresh();
  }

  /**
   * Handle resize messages.
   */
  protected onResize(msg: ResizeMessage): void {
    if (msg.width < 0 || msg.height < 0) {
      this._editor.refresh();
    } else {
      this._editor.setSize(msg.width, msg.height);
    }
  }

  /**
   * Change handler for model updates.
   */
  protected onModelStateChanged(sender: ITextEditorViewModel, args: IChangedArgs<any>) {
    switch(args.name) {
    case 'fixedHeight':
      this.updateFixedHeight(args.newValue);
      break;
    case 'text':
      this.updateText(args.newValue);
      break;
    case 'mimetype':
      this.updateMimetype(args.newValue);
      break;
    case 'lineNumbers':
      this.updateLineNumbers(args.newValue);
      break;
    }
  }

  /**
   * Load a CodeMirror mode asynchronously.
   */
  private _loadCodeMirrorMode(mode: string) {
    // load codemirror mode module, returning a promise.
    if (CodeMirror.modes.hasOwnProperty(mode)) {
      return Promise.resolve();
    } else {
      return System.import(`codemirror/mode/${mode}/${mode}`);
    }
  }

  private _editor: CodeMirror.Editor;
  private _model: ITextEditorViewModel;
}

export
interface FunctionTable {
  [key: string]: Function
}

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
    this.updateRendered(model.rendered);
    this.updateCollapsed(model.collapsed);
    this.updatePromptNumber(model.promptNumber);
    this.updateExecutionCount(model.executionCount);
    model.stateChanged.connect(this._modelUpdate, this);
  }

  /**
   * Update the text editor model, creating a new text editor
   * widget and detaching the old one.
   */
  updateTextEditor(editor: ITextEditorViewModel) {
    this.children.assign([new CodeMirrorWidget(editor)]);
  }

  updateRendered(render: boolean) {

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
    case 'rendered':
      this.updateRendered(args.newValue);
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
