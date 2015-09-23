import * as jsdom from 'jsdom';
import * as navigator from 'navigator';

import {assert, expect} from 'chai';

import {testInputModel} from '../input-model.test';

// virtual DOM environment for CodeMirror
describe('CodeMirror testing environment', function() {
    it('setup', function() {
        return new Promise((success, failure) => {
            jsdom.env({
                html: `
                    <html>
                        <body>
                            <textarea rows="4" cols="50" id="cmcontainer"></textarea>
                        </body>
                    </html>
                `, done: (err, window) => {
                    assert.notOk(err, 'JSDOM env');
                    global.navigator = navigator;
                    global.document = window.document;
                    global.window = window;
                    
                    // Polyfill for createRange function.
                    // Credit: http://discuss.codemirror.net/t/working-in-jsdom-or-node-js-natively/138/2
                    document.createRange = function() {
                        return {
                            setEnd: function(){},
                            setStart: function(){},
                            getBoundingClientRect: function(){
                                return {right: 0};
                            }
                        }
                    };
                    
                    // We must defer the loading of the CodeMirror until the 
                    // environment has been spoofed.
                    let CodeMirror = require('codemirror');
                    
                    // Construct a CodeMirror instance
                    let cm = CodeMirror.fromTextArea(document.getElementById('cmcontainer'), {
                        mode: "javascript",
                        theme: "default",
                        lineNumbers: true,
                        readOnly: false
                    });
                    assert.ok(cm, 'CodeMirror instance constructed');
                    
                    // We must defer the loading of the CodeMirrorInputModel until the 
                    // environment has been spoofed.
                    let CodeMirrorInputModel = require('../../src/CodeMirror/input-model').CodeMirrorInputModel;
                    
                    success();
                    testInputModel('CodeMirror', () => new CodeMirrorInputModel(undefined, cm));
                }
            });
        });    
    });
});

