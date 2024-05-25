const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/members',
    createProxyMiddleware({
      target: 'http://localhost:5000',  // Your Flask server URL
      changeOrigin: true,
    })
  );
};
