const express = require('express');
const path = require('path');

//for local WaveJS, uncomment the bellow
const { WaveJS, Logger } = require('wave.js')
// for production WaveJS, uncomment the below
//const WaveJS = require('@wave.js/wave.js');

const app = express();

const server = new WaveJS();

const port = 8000;

const mode = process.env.NODE_ENV;

if (mode === 'production') {
  app.use(express.static(path.join(__dirname, '../../dist')));
} else {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const config = require('../../webpack.config.js');
  const compiler = webpack(config);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    })
  );
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, '../../dist')));


//Logger.setLogLevel(5) //debug, default is just info

server.updateMediaDir(path.join(__dirname, 'media'))
server.updateOutputProtocol('hls')
server.updateHLSOutput({ hlsListSize: 0 })
server.updateInputSettings({ endpoint: 'wavejs' });
server.updateOutputSettings({ endpoint: 'wavejs', port: 3000 });

server.listen();

app.listen(port, () => {
  Logger.info('Listening on port ', port);
});
