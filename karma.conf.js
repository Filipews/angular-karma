// Karma configuration
// Generated on Thu Jun 30 2016 09:47:00 GMT-0300 (Hora oficial do Brasil)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      /* Vendor */
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/angular/angular.min.js',
      'node_modules/angular-route/angular-route.min.js',
      'node_modules/angular-animate/angular-animate.min.js',
      'node_modules/angular-sanitize/angular-sanitize.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/toastr/build/toastr.min.js',
      'node_modules/moment/min/moment.min.js',
      /* Blocks */
      'app/blocks/exception/exception.module.js',
      'app/blocks/exception/exception-handler.provider.js',
      'app/blocks/exception/exception.js',
      'app/blocks/logger/logger.module.js',
      'app/blocks/logger/logger.js',
      'app/blocks/router/router.module.js',
      'app/blocks/router/routehelper.js',
      /* Core */
      'app/core/core.module.js',
      'app/core/constants.js',
      'app/core/config.js',
      'app/core/dataservice.js',
      /* App */
      'app/app.module.js',
      /* Mod1 */
      'app/mod1/mod1.module.js',
      'app/mod1/config.route.js',
      'app/mod1/mod1.js',
      /* Mod2 */
      'app/mod2/mod2.module.js',
      'app/mod2/config.route.js',
      'app/mod2/mod2.js',
      /* Test specs */
      'test/unit/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      'app/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    plugins: [
      'karma-chrome-launcher',
      //'karma-firefox-launcher',
      'karma-jasmine',
      //'karma-junit-reporter',
      'karma-coverage'
    ]
  })
}
