// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import expect = require('expect.js');

import {
  TextEditorViewModel
} from '../../lib';


describe('jupyter-js-input-area', () => {

  describe('TextEditorViewModel', () => {
    it('should always pass', () => {
      let textModel = new TextEditorViewModel();
      textModel.lineNumbers = true;
      expect(textModel.lineNumbers).to.be(true);
    });
  });
});
