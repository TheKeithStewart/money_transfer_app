module.exports = function () {
  var srcDir = './src/';
  var distDir = './dist/';

  var config = {
    // directories
    distDir: distDir,
    srcDir: srcDir,
    testDir: './tests/',

    // files
    srcFiles: [
      srcDir + '**/*'
    ],

    // injection
    npmScripts: [
      './node_modules/angular/angular.min.js',
      './node_modules/angular-animate/angular-animate.min.js',
      './node_modules/angular-route/angular-route.min.js',
      './node_modules/angular-aria/angular-aria.min.js',
      './node_modules/angular-material/angular-material.min.js',
      './node_modules/angular-material-icons/angular-material-icons.min.js'
    ],
    jsOrder: [
      '**/scripts/angular.min.js',
      '**/scripts/**/*.js',
      '**/app/**/*.module.js',
      '**/app/**/*.js'
    ]
  };

  return config;
};
