'use-strict';

import {
  Widget
} from 'phosphor-widget';

import {
  CodeMirrorWidget, InputAreaViewModel, TextEditorViewModel
} from '../lib/index';

function main(): void {
  let textModel = new TextEditorViewModel();
  textModel.text = `def f(n):
    for i in range(n):
        print(i)
  `
  textModel.mimetype = 'text/x-python'
  textModel.lineNumbers = true;
/*  let inputVModel = new InputAreaViewModel();
  inputVModel.textEditor = textModel;
  */

  var c = new CodeMirrorWidget(textModel);
  Widget.attach(c, document.body);
}

main();
