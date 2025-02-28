const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://status.nasa.gov',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // remove /api prefix when forwarding to target
            },
        })
    );
};
