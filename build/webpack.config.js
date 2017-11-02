const path = require('path');
const argv = require('yargs').argv;
const CDN_ASSETS_URL = '';
const dirs = require('./site.config').dirs;
const env = argv.config.indexOf('prod.conf') > -1 ? 'prod' : 'dev';
const dllPath = env === 'dev' ? '/' + dirs.dist : '/' + dirs.server;
const publicPath = env === 'dev' ? '/' : '/' + dirs.server + '/';


module.exports = {
  statisticPath: path.join(__dirname, '../src/components/helper/umeng-statistic.html'),
  vendorName: 'vendors/common',
  spa: false,
  baseEntryPath: dirs.src + '/modules/**/index.js',
  dirs: dirs,
  htmlWebpackOptions: {
    hash: 6,
    data: {
      cdn_ionicons: 'http://cdn.bootcss.com/ionicons/2.0.1/css/ionicons.css',

    }
  },
  devServer: {
    port: 80,
    hot: true,
    host: '192.168.10.164',
    stats: 'errors-only',
    proxy: {

    }
  },
  output: {
    path: path.join(__dirname, '..', dirs.dist),
    filename: '[name]-[hash:6].js',
    chunkFilename: '[id]-[hash:6].js',
    minify: false,
    publicPath
  }
};
