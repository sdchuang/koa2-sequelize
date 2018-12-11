
import log4js from 'log4js'

/**
 * 日志配置
 */
log4js.configure({
  appenders: {
      error: {
          type: 'dateFile',           //日志类型
          category: 'errLogger',    //日志名称
          filename: __dirname + '/../logs/error/', //日志输出位置，当目录文件或文件夹不存在时自动创建
          maxLogSize: 104800, // 文件最大存储空间
          backups: 100,  //当文件内容超过文件存储空间时，备份文件的数量
          pattern: 'yyyy-MM-dd.log', //日志输出模式
          alwaysIncludePattern: true,
          maxLogSize: 104800,
          backups: 100
      },
      response: {
          type: 'dateFile',
          category: 'resLogger',
          filename: __dirname + '/../logs/responses/',
          pattern: 'yyyy-MM-dd.log', //日志输出模式
          alwaysIncludePattern: true,
          maxLogSize: 104800,
          backups: 100
      }
  },
  categories: {
      error: {appenders: ['error'], level: 'error'},
      response: {appenders: ['response'], level: 'info'},
      default: { appenders: ['response'], level: 'info'}
  },
  replaceConsole: true
})

/**
 * 格式化输出
 */
export let logger = {};
let errorLogger = log4js.getLogger('error')
let resLogger = log4js.getLogger('response')

// 封装错误日志
logger.errLogger = (ctx, error, resTime) => {
  if(ctx && error) {
      errorLogger.error(formatError(ctx, error, resTime))
  }
}
// 封装响应日志
logger.resLogger = (ctx, resTime) => {
  if(ctx) {
      resLogger.info(formatRes(ctx, resTime))
  }
}

/**
 * 日志输出格式
 */
let formatError = (ctx, err,costTime) => {
  // console.log('>>>>>>>>>>>>>',ctx)
  let method = ctx.method
  let url = ctx.url
  let header = ctx.header
  let body = ctx.request.body
  let response = ctx.response
  let userAgent = ctx.header.userAgent
  return {method, url, header, body, response, costTime, err}
}
let formatRes = (ctx,costTime) => {
  // console.log('>>>>>>>>>>>>>',ctx)
  let method = ctx.method
  let url = ctx.url
  let header = ctx.header
  let body = ctx.request.body
  let response = ctx.response
  return {method, url, header, body, costTime, response}
}
