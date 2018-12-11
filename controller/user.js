import jwt from 'jsonwebtoken'
const secret = 'mingjiazongxueguanmingjiazongxueguan'
const util = require('util')
const verify = util.promisify(jwt.verify) // 解密

import { models } from '../models/index'

const User = models.user;

async function userList(ctx) {
  // console.log(ctx.request)
  var userList = await User.findAll();
  // ctx.throw('500','失败')
  ctx.body = {
    code:0,
    userId:ctx.request.query.userId,
    data:{
      'userList':userList,
    },
    msg:'成功'
  }
}

async function userInfo(ctx) {
  var userList = await User.findAll();
  // ctx.throw('500','失败')
  ctx.body = {
    code:0,
    userId:ctx.request.query.userId,
    data:{
      'userList':userList,
    },
    msg:'成功'
  }
}

export default {
  userList,
  userInfo
}