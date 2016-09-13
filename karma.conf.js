//jshint strict: false
module.exports = function (config) {
  config.set({

    basePath: './',

    files: [
      'dist/scripts/**/angular.min.js',
      'dist/scripts/**/*.js',
      './node_modules/angular-mocks/angular-mocks.js',
      'tests/build/app/**/*.module.js',
      'tests/build/app/**/*.model.js',
      'tests/build/app/**/*.service.js',
      'tests/build/app/**/*.js'
    ],

    autoWatch: false,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-jasmine-html-reporter',
      'karma-html-reporter',
      'karma-junit-reporter'
    ],

    reporters: ['progress', 'kjhtml', 'coverage', 'html', 'junit'],

    preprocessors: {
      'tests/build/app/**/*.js': ['coverage']
    },

    htmlReporter: {
      outputDir: 'tests/reports', // where to put the reports  
      templatePath: null, // set if you moved jasmine_template.html 
      focusOnFailures: true, // reports show failures on start 
      namedFiles: false, // name files instead of creating sub-directories 
      pageTitle: null, // page title for reports; browser info by default 
      urlFriendlyName: false, // simply replaces spaces with _ for files/dirs 
      reportName: 'karma-html-reporter', // report summary filename; browser info by default 
    },

    coverageReporter: {
      dir: 'tests/reports/coverage'
    },

    junitReporter: {
      outputDir: 'tests/reports/junit', // results will be saved as $outputDir/$browserName.xml
      outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: '', // suite will become the package name attribute in xml testsuite element
      useBrowserName: true, // add browser name to report and classes names
      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
      properties: {} // key value pair of properties to add to the <properties> section of the report
    }
  });
};