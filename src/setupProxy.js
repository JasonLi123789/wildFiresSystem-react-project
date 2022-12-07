const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://9rpmw4nf9e.execute-api.us-west-2.amazonaws.com",
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
