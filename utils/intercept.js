
import jwt from 'jsonwebtoken'
const secret = 'xx'
const util = require('util')
const verify = util.promisify(jwt.verify) // 解密

// 10位毫秒
let curTime = Math.round(new Date().getTime()/1000);
// 待处理
export async function intercept(ctx,next) {
  if(ctx.request.url == '/favicon.ico'){return;}
  if(ctx.request.url == '/login'){
    const token = ctx.header.authorization  // 获取jwt
    let payload
    if (token) {
      payload = await verify(token.split(' ')[1], secret) // 解密，获取payload
      // 过期
      if(payload.exp < curTime){
        ctx.body = {
          code:100403,
          msg:'没有权限(过期)'
        }
        return;
      }
    } else {
      ctx.body = {
        code: 100403,
        msg:'没有权限'
      }
      return;
    }
  }
  await next();
}