module.exports = function (config) {
  config.set({
    basePath: '..',
    frameworks: ['systemjs', 'mocha'],
    files: ['test/build/*.js'],
    reporters: ['mocha'],
    systemjs: {
      configFile: ['test/system.conf.js'],
      serveFiles: [
        'lib/*.*',
        'node_modules/**/*.*',
        //'test/src/**/*.*'
      ],
    },
    port: 9876,
    colors: true,
    singleRun: true,
    logLevel: config.LOG_INFO
  });
};
