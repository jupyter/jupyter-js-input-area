module.exports = function (config) {
  config.set({
    basePath: '..',
    browsers: ['Firefox'],
    frameworks: ['systemjs', 'mocha'],
    reporters: ['mocha', 'coverage'],
    preprocessors: { 'build/*.js': ['coverage'] },
    files: ['test/build/*.js'],
    coverageReporter: {
      reporters : [
        { 'type': 'text' },
        { 'type': 'lcov', dir: 'coverage' },
        { 'type': 'html', dir: 'coverage' }
      ]
    },
    systemjs: {
      configFile: ['test/system.conf.js'],
      serveFiles: [
        'lib/*.*',
        'node_modules/**/*.*',
        'test/src/**/*.*'
      ],
    },
    port: 9876,
    colors: true,
    singleRun: true,
    logLevel: config.LOG_INFO
  });
};
