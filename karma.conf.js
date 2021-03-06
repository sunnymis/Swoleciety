// Karma configuration
// Generated on Thu Feb 09 2017 20:30:48 GMT-0500 (EST)
module.exports = (config) => {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
    // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-spec-reporter',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-coverage',
    ],
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    // list of files / patterns to load in the browser
    files: [
      'tests.index.js',
    ],
    // list of files to exclude
    exclude: [
      './node_modules',
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests.index.js': ['webpack', 'sourcemap'],
      'app/component/*.js': ['coverage', 'webpack'],
    },
    // Webpack. Can't use the dev webpack file because
    // it looks like karma.conf doesn't support webpack 2 syntax
    // of module rules
    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.js$/,
            loader: 'istanbul-instrumenter-loader',
            exclude: /node_modules/,
            enforce: 'post',
          },
          {
            test: /\.scss$/,
            loaders: ['raw-loader', 'sass-loader'], // sass-loader not scss-loader
            exclude: /node_modules/,
          },
        ],
      },
      // This is for enzyme to work
      externals: {
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      },
    },
    webpackServer: {
      noInfo: true,
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
      ],
    },
  });
};
