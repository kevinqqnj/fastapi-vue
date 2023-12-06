const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // outputDir: process.env.NODE_ENV==='production'? "dist/fastapi" : 'dist',
  // publicPath: process.env.NODE_ENV==='production'? '/fastapi/' : '',
  productionSourceMap: process.env.NODE_ENV==='production' ? false : true,
  devServer: {
    proxy: 'http://localhost:8000/'
  }

  // devServer: {                //这里都是配置开发环境参数
  //   port: 8080,					//设置开发环境前端端口  选填
  //   proxy: {                 //设置开发环境代理
  //       '/fastapi': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
  //           target: 'http://localhost:8000/fastapi',     //代理的目标地址(后端设置的端口号)
  //           changeOrigin: true,              //是否设置同源，输入是的
  //           pathRewrite: { // 重定向
  //               '^/fastapi': ''
  //           }
  //       }
  //   }
  // }

})
