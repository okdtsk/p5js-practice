import {create as bsCreate} from 'browser-sync'
import gulp from 'gulp'
import gulpBabel from 'gulp-babel'
import gutil from 'gulp-util'
import webpack from 'webpack'
import webpackStream from 'webpack-stream'
import webpackDevServer from 'webpack-dev-server'
import webpackConfig from './webpack.config.babel'

const browserSync = bsCreate()
const build_webpack = () => {
  console.log('Read webpack config from webpack.config.babel.js')
  console.log(webpackConfig)
  gulp.src(webpackConfig.entry)
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(webpackConfig.output.path))
}


gulp.task('default', () => {
  console.log('a')
})

gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  })
  gulp.watch('src/*.js', browserSync.reload)
})

gulp.task('es6-build', build_webpack)


gulp.task('es6-watch', () => {
  let conf = {
    port: 3111,
    host: 'localhost'
  }
  webpackConfig.devtool = 'eval'
  new webpackDevServer(webpack(webpackConfig), {
    stats: {
      colors: true,
      progress: true,
    },
    contentBase: webpackConfig.output.path
  }).listen(conf.port, conf.host, (err) => {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err)
    }
    gutil.log('[webpack-dev-server]', 'http://' + conf.host + ':' + conf.port)
  })
})
