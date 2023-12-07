const express = require('express');
const path = require('path');
const WaveJS = require('wave.js');

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

server.configureAV({ hlsListSize: ['-hls_list_size', '0'] });
server.setInput({ endpoint: 'wavejs' });
server.setOutput({ endpoint: 'wavejs', port: 3000 });

server.listen();

app.listen(port, () => {
  console.log('Listening on port ', port);
});
