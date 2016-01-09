'use-strict';

import {
  Widget
} from 'phosphor-widget';

import {
  InputAreaModel, InputAreaWidget
} from '../../lib/index';

import {
  EditorModel, CodeMirrorWidget
} from 'jupyter-js-editor';

import '../index.css';


let initialCode = `def f(n):
    for i in range(n):
        print(i)
`;

function main(): void {
  let textModel = new EditorModel();
  textModel.text = initialCode;
  textModel.mimetype = 'text/x-python';
  textModel.lineNumbers = true;
  let inputModel = new InputAreaModel();
  inputModel.textEditor = textModel;
  let c = new InputAreaWidget(inputModel);
  c.attach(document.body);
}

window.onload = main;
