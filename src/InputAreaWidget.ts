// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

'use strict';

import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/meta';

import {
  Message
} from 'phosphor-messaging';

import {
  ResizeMessage, Widget
} from 'phosphor-widget';

import {
  ISignal, Signal
} from 'phosphor-signaling';

import {
  IInputAreaViewModel, ITextEditorViewModel, IChangedArgs
} from './InputAreaViewModel';

import * as dmp from 'diff-match-patch';


let diffMatchPatch = new dmp.diff_match_patch()

/**
 * A widget which hosts a CodeMirror editor.
 */
export
class CodeMirrorWidget extends Widget {

  /**
   * Construct a CodeMirror widget
   */
  constructor(model: ITextEditorViewModel) {
    super();
    this.addClass('CodeMirrorWidget');
    this._model = model;
    this._editor = CodeMirror(this.node);
    this.updateMimetype(model.mimetype);
    this.updateLineNumbers(model.lineNumbers);
    this.updateFixedHeight(model.fixedHeight);
    this.updateText(model.text);

    this._editor.on('change', (instance, change) => {
      this._model.text = this._editor.getDoc().getValue();
    });
    model.stateChanged.connect(this._modelUpdate, this);
  }

  /**
   * Update the fixedHeight
   */
  updateFixedHeight(fixedHeight: boolean) {
    if (fixedHeight) {
      this.addClass('CodeMirrorWidget-fixedHeight');
    } else {
      this.removeClass('CodeMirrorWidget-fixedHeight');
    }
  }

  /**
   * Update the text in the widget.
   *
   * #### Notes
   * This function attempts to restore the cursor to the correct
   * place by using the bitap algorithm to find the corresponding
   * position of the cursor in the new text.
   */
  updateText(text: string) {
    if (this.text !== text) {
      // TODO: do something smart with all the selections

      let doc = this._editor.getDoc();
      let oldText = doc.getValue();
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
  updateMimetype(mimetype: string) {
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
  updateLineNumbers(lineNumbers: boolean) {
    this._editor.setOption('lineNumbers', lineNumbers);
  }

  /**
   * Get the text in the widget.
   */
  get text(): string {
    return this._editor.getDoc().getValue();
  }

  /**
   * Set the text in the widget.
   */
  set text(text: string) {
    this.updateText(text)
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
   * Change handler for model updates
   */
  private _modelUpdate(sender: ITextEditorViewModel, args: IChangedArgs<any>) {
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
    // load codemirror mode module, returning a promise
    if (CodeMirror.modes.hasOwnProperty(mode)) {
      return Promise.resolve();
    } else {
      return System.import(`codemirror/mode/${mode}/${mode}`);
    }
  }

  private _editor: CodeMirror.Editor;
  private _model: ITextEditorViewModel;
}
