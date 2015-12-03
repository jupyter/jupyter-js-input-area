System.config({
  transpiler: null,
  paths: {
    'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
    'systemjs': 'node_modules/systemjs/dist/system.js',
    'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
    'expect.js': 'node_modules/expect.js/index.js',
    'phosphor-properties': 'node_modules/phosphor-properties/lib/index.js',
    'phosphor-signaling': 'node_modules/phosphor-signaling/lib/index.js',
    'phosphor-widget': 'node_modules/phosphor-widget/lib/index.js',
    'phosphor-messaging': 'node_modules/phosphor-messaging/lib/index.js',
    'phosphor-queue': 'node_modules/phosphor-queue/lib/index.js',
    'phosphor-arrays': 'node_modules/phosphor-widget/node_modules/phosphor-arrays/lib/index.js',
    'phosphor-observablelist': 'node_modules/phosphor-widget/node_modules/phosphor-observablelist/lib/index.js',
    'phosphor-nodewrapper': 'node_modules/phosphor-widget/node_modules/phosphor-nodewrapper/lib/index.js',
    'codemirror': 'node_modules/codemirror/lib/codemirror.js',
    'codemirror/*': 'node_modules/codemirror/*',
    'diff-match-patch': 'node_modules/diff-match-patch/index.js',
  },
  packages: {
    '.': {
      defaultExtension: 'js',
      meta: {
        '*.json': {
          loader: 'node_modules/systemjs-plugin-json/json.js'
        },
        '*.css': {
          loader: 'node_modules/system-css/css.js'
        }
      }
    },
    'lib': {
      main: 'index.js'
    },
  }
});