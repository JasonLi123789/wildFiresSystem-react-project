const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api1", {
      target: "https://u2i0qwcpu7.execute-api.us-west-1.amazonaws.com/default",
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api1": "",
      },
    }),
   
    
    createProxyMiddleware("/api2", {
      target: "https://8pgacy74vj.execute-api.us-west-2.amazonaws.com",
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api2": "",
      },
    })
  );
};
