const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
// log
const logger = require('koa-logger')
import {logger as log4js} from './utils/log_util'

const cors = require('koa2-cors')

// session
const session = require('koa-session')

const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())

// session
app.use(session(app))

// 日志
app.use(logger())

app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// log  正常情况的日志
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  // 
  if(ctx.response.status != 200){
    // console.log('>>>>>>>>>>>>',ctx.response.body.code)
    // log4js.resLogger(ctx, ms)
    let err = ctx.response.status;
    log4js.errLogger(ctx, err)
  }
})

// 跨域
app.use(cors())

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  // 请求出错的日志
  log4js.errLogger(ctx, err)
  console.error('server error', err, ctx)
});

module.exports = app
