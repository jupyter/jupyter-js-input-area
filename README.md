jupyter-js-input-area
=======================

[![Build Status](https://travis-ci.org/jupyter/jupyter-js-input-area.svg)](https://travis-ci.org/jupyter/jupyter-js-input-area?branch=master)
[![Coverage Status](https://coveralls.io/repos/jupyter/jupyter-js-input-area/badge.svg?branch=master&service=github)](https://coveralls.io/github/jupyter/jupyter-js-input-area?branch=master)

An input area widget and model for the Jupyter notebook.

[API Docs](http://jupyter.github.io/jupyter-js-input-area/)


Package Install
---------------

**Prerequisites**
- [node](http://nodejs.org/)

```bash
npm install --save jupyter-js-input-area
```


Source Build
------------

**Prerequisites**
- [git](http://git-scm.com/)
- [node](http://nodejs.org/)

```bash
git clone https://github.com/jupyter/jupyter-js-input-area.git
cd jupyter-js-input-area
npm install
```

**Rebuild**
```bash
npm run clean
npm run build
```


Run Tests
---------

Follow the source build instructions first.

```bash
# run tests in Firefox
npm test

# run tests in Chrome
npm run test:chrome

# run tests in IE
npm run test:ie
```


Build Example
-------------

Follow the source build instructions first.

```bash
npm run build:example
```

Change to `example` directory and navigate to `index.html`.


Build Docs
----------

Follow the source build instructions first.

```bash
npm run docs
```

Navigate to `docs/index.html`.


Supported Runtimes
------------------

The runtime versions which are currently *known to work* are listed below.
Earlier versions may also work, but come with no guarantees.

- IE 11+
- Firefox 32+
- Chrome 38+


Bundle for the Browser
----------------------

Follow the package install instructions first.

Any bundler that understands how to `require()` files with `.js` and `.css`
extensions can be used with this package.


Usage Examples
--------------

**Note:** This module is fully compatible with Node/Babel/ES6/ES5. Simply
omit the type declarations when using a language other than TypeScript.
