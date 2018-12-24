
import jwt from 'jsonwebtoken'
const secret = 'jwtdemo'

import { models } from '../models/index'

const User = models.user;

async function login(ctx) {
  let userToken = {
    user_id: 3320,
    nikename:'正式2'
  }
  const token = jwt.sign(userToken, secret, {expiresIn: '6h'})  //token签名 有效期为1小时

  ctx.body = {
    code: 0,
    message: 'token获取成功',
    token:token
  }

}

export default {
  login,
}