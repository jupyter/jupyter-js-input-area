'use-strict';

import {
  Widget
} from 'phosphor-widget';

import {
  InputAreaViewModel, TextEditorViewModel,
  CodeMirrorWidget, InputAreaWidget
} from '../lib/index';

let initialCode = `def f(n):
    for i in range(n):
        print(i)
`;

function main(): void {
  let textModel = new TextEditorViewModel();
  textModel.text = initialCode;
  textModel.mimetype = 'text/x-python';
  textModel.lineNumbers = true;
  let inputModel = new InputAreaViewModel();
  inputModel.textEditor = textModel;
  let c = new InputAreaWidget(inputModel);
  Widget.attach(c, document.body);
}

main();
