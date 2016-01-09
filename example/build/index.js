'use-strict';
var index_1 = require('../../lib/index');
var jupyter_js_editor_1 = require('jupyter-js-editor');
require('../index.css');
var initialCode = "def f(n):\n    for i in range(n):\n        print(i)\n";
function main() {
    var textModel = new jupyter_js_editor_1.EditorModel();
    textModel.text = initialCode;
    textModel.mimetype = 'text/x-python';
    textModel.lineNumbers = true;
    var inputModel = new index_1.InputAreaModel();
    inputModel.textEditor = textModel;
    var c = new index_1.InputAreaWidget(inputModel);
    c.attach(document.body);
}
window.onload = main;
