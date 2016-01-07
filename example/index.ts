'use-strict';

import {
  Widget
} from 'phosphor-widget';

import {
  InputAreaViewModel, InputAreaWidget
} from '../lib/index';

import {
  EditorModel, CodeMirrorWidget
} from 'jupyter-js-editor';

let initialCode = `def f(n):
    for i in range(n):
        print(i)
`;

function main(): void {
  let textModel = new EditorModel();
  textModel.text = initialCode;
  textModel.mimetype = 'text/x-python';
  textModel.lineNumbers = true;
  let inputModel = new InputAreaViewModel();
  inputModel.textEditor = textModel;
  let c = new InputAreaWidget(inputModel);
  c.attach(document.body);
}

main();
