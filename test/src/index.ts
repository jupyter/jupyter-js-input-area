// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import expect = require('expect.js');

import {
  TextEditorViewModel, CodeMirrorWidget
} from '../../lib';

describe('jupyter-js-input-area', () => {
   describe('TextEditorViewModel', () => {
    it('should instantiate', () => {
      let textModel = new TextEditorViewModel();
      textModel.lineNumbers = true;
      expect(textModel.lineNumbers).to.be(true);
    });
  });

  describe('CodeMirrorWidget', () => {
    it('should instantiate', () => {
      let textModel = new TextEditorViewModel();
      textModel.mimetype = 'text/x-python';
      let cm = new CodeMirrorWidget(textModel);
      expect(cm.node).to.be(true);
    });
  });

  describe('TextEditorViewModel', () => {
    it('should instantiate', () => {
      let textModel = new TextEditorViewModel();
      textModel.lineNumbers = true;
      expect(textModel.lineNumbers).to.be(true);
    });
  });
});
