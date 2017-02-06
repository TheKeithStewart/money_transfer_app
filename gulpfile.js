var config = require('./gulp.config')();

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({ lazy: true });
var del = require('del');
var karmaServer = require('karma').Server;

/**
 * Triggers the build process 
 */
gulp.task('build', ['templates', 'scripts', 'styles'], function () {
  return gulp.src(config.srcDir + 'index.html')
    .pipe(inject('assets/**/*.css'))
    .pipe(inject('**/*.js', null, config.jsOrder))
    .pipe(gulp.dest(config.distDir));

  function inject(path, name, order) {
    var pathGlob = config.distDir + path;
    var options = {};
    if (name) {
      options.name = name;
    }

    return $.inject(orderSrc(pathGlob, order), options);
  }

  function orderSrc(src, order) {
    return gulp
      .src(src)
      .pipe($.if(order, $.order(order)));
  }
});

gulp.task('build:test', ['clean-tests'], function() {
  var tsProject = $.typescript.createProject(config.srcDir + 'tsconfig.json');

  return gulp.src([
    config.srcFiles + '**/*.ts',
    'node_modules/@types/**/*.d.ts'
  ]).pipe($.typescript(tsProject))
    .js.pipe(gulp.dest(config.testDir + 'build'));
});

gulp.task('clean-tests', function () {
  var files = [].concat(
    config.testDir + 'build/**/*.js'
  );
  return clean(files);
});

gulp.task('test', ['build:test'], function (done) {
  new karmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function () {
    done();
  }).start();
});

gulp.task('styles', ['clean-styles'], function () {
  return gulp.src([
    config.srcDir + 'assets/**/*.css',
    './node_modules/angular-material/angular-material.min.css',
    './node_modules/angular-material-icons/angular-material-icons.css',
  ])
    .pipe(gulp.dest(config.distDir + 'assets/'))
});

gulp.task('clean-styles', function () {
  var files = [].concat(
    config.distDir + 'assets/**/*.css'
  );
  return clean(files);
});

/**
 * Processes template files and copies them into the build directory
 * @return {Stream}
 */
gulp.task('templates', ['clean-templates'], function () {
  return gulp.src(config.srcDir + 'app/**/*.html')
    .pipe(gulp.dest(config.distDir + 'app/'));
});

/**
 * Remove all html files from the build folder
 * @return {Stream}
 */
gulp.task('clean-templates', function () {
  var files = [].concat(
    config.distDir + 'app/**/*.html'
  );
  return clean(files);
});

gulp.task('scripts', ['scripts-typescript', 'scripts-thirdparty'], function () {

});

gulp.task('scripts-thirdparty', ['clean-scripts-thirdparty'], function () {
  return gulp.src(config.npmScripts)
    .pipe(gulp.dest(config.distDir + 'scripts/'));
});

gulp.task('clean-scripts-thirdparty', function () {
  var files = [].concat(
    config.distDir + 'scripts/**/*.js'
  );
  return clean(files);
});

/**
 * Transpiles TypeScript code and moves the compiled JavaScript into the temp directory
 * @return {Stream}
 */
gulp.task('scripts-typescript', ['clean-scripts-typescript'], function () {
  var tsProject = $.typescript.createProject(config.srcDir + 'tsconfig.json');

  return gulp.src([
    config.srcFiles + '**/*.ts',
    '!' + config.srcDir + '**/*.spec.ts',
    'node_modules/@types/**/*.d.ts'
  ]).pipe($.typescript(tsProject))
    .js.pipe(gulp.dest(config.distDir));
});

/**
 * Remove all javascript files from the build/app directory.
 * @return {Stream}
 */
gulp.task('clean-scripts-typescript', function () {
  var files = [].concat(
    config.distDir + 'app/**/*.js'
  );
  return clean(files);
});

/**
 * Watch development files and build them upon save
 */
gulp.task('watch', ['build'], function () {
  gulp.watch(config.srcFiles, ['build']);
});

gulp.task('watch:test', ['test'], function () {
  gulp.watch(config.srcFiles, ['test']);
});

/**
 * Delete all files in a given path
 */
function clean(path) {
  log('Cleaning: ' + $.util.colors.blue(path));
  return del(path);
}

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log(msg) {
  if (typeof (msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
}
