'use-strict';

import {
  Widget
} from 'phosphor-widget';

import {
  CodeMirrorWidget, InputAreaViewModel, TextEditorViewModel
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
  let c = new CodeMirrorWidget(textModel);
  Widget.attach(c, document.body);
}

main();
