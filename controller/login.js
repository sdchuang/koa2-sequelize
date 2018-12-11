
import jwt from 'jsonwebtoken'
const secret = 'jwt demo'

import { models } from '../models/index'

const User = models.user;

async function login(ctx) {
  const user = ctx.request.body
  // console.log('>>>>>>>>>>>>>>',user)
  console.log('>>>>>>>>>>>>>>',user)
  console.log('>>>>>>>>>>>>>>',user.name)
  // jwt
  if(user && user.name) {
    let userToken = {
      name: user.name
    }
    const token = jwt.sign(userToken, secret, {expiresIn: '1h'})  //token签名 有效期为1小时
    ctx.body = {
      message: '获取token成功',
      code: 0,
      token
    }
  } else {
    ctx.body = {
      message: '参数错误',
      code: 0
    }
  }
}

export default {
  login,
}