import * as jsdom from 'jsdom';
import * as navigator from 'navigator';

import {assert, expect} from 'chai';

import {testInputView} from '../input-view.test';
import {testIntegration} from './integration.test';

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
                    
                    // Make sure we can interact with the CodeMirror instance
                    cm.setValue('abc');
                    assert.equal(cm.getValue(), 'abc');
                    cm.setValue('');
                    
                    // We must defer the loading of the CodeMirrorInputView until the 
                    // environment has been spoofed.
                    let CodeMirrorInputView = require('../../src/CodeMirror/input-view').CodeMirrorInputView;
                    success();
                    
                    describe('CodeMirror', function() {
                        let createModel = id => new CodeMirrorInputView(id, cm);
                        testInputView('generic', createModel);
                        testIntegration(createModel);
                    });
                }
            });
        });    
    });
});
