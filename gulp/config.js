var src = 'src';
var build = 'doc';
module.exports = {
  browsersync: {
    server: {
      baseDir: [build], // 启动服务的目录
      index: '/index.html'
    },
    files: [
      build + '/css/*.css',
      build + '/js/*.js',
      build + '/images/**/*',
      build + '/fonts/*',
      build + '/'
    ],
    injectChanges: true // 注入CSS改变
  },
  sass: {
    src: src + '/scss/**/*.{sass,scss}',
    dest: build + '/css',
  },
  cleanCSS: {
    compatibility: 'ie8',
    keepSpecialComments: '*'
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  pug: {
    src: src + '/views/html/*.pug',
    dest: build + '/'
  },
  images: {
    src: src + '/images/**/*',
    dest: build + '/images'
  },
  scripts: {
    src: src + '/js/**/*',
    dest: build + '/js'
  },
  copyfonts: {
    src: src + '/fonts/**/*',
    dest: build + '/fonts'
  },
  watch: {
    sass: src + '/scss/**/*.{sass,scss}',
    scripts: src + '/js/**/*.js',
    images: src + '/images/**/*',
    pug: src + '/views/**/*.pug',
    copyfonts: src + '/fonts/**/*',
    delete: build + "/**/*",
  }
};
