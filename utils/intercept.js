
import util from 'util'
import jwt from 'jsonwebtoken'
const secret = 'jwtdemo'
const verify = util.promisify(jwt.verify) // 解密

import { models } from '../models/index'
const NcUser = models.ncUser;

// 10位毫秒
let curTime = Math.round(new Date().getTime()/1000);
// 
export async function intercept(ctx,next) {
  // console.log('url',ctx.request)
  if(ctx.request.url == '/favicon.ico'){return;}

  if(ctx.request.url != '/v2/login'){

    const token = ctx.header.authorization  // 获取jwt
    
    if(token){//判断是否传token

      var payload;
      await verify(token.split(' ')[1], secret) // 解密，获取payload
      .then(res => {
        console.log(res);
        payload = res;
      })
      .catch(err => {//token 解析异常(包含过期情况)
        console.log(err);
        ctx.body = {
          code:100403,
          msg:'没有权限(过期)',
        }
      })
      if(!payload){return;}


      // 没过期且游客时
      if(payload.tourist){
        // 截断部分接口权限
        
      }


      let userInfo = await NcUser.find({
        where:{user_id:payload.user_id}
      })
      if(!(userInfo.is_online || '' || false || 0)){//判断用户是否有权限
        // console.log('hahahahahahah')
        ctx.body = {
          code: 100403,
          msg:'没有权限(diff user)',
        }
        return;
      }


      await next();
    }else{//token false
      ctx.body = {
        code: 100403,
        msg:'没有权限(token false)',
      }
      return;
    }

  }else{
    await next();
  }

}