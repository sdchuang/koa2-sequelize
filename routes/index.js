const router = require('koa-router')()

import {intercept} from '../utils/intercept'
// 引入controller
import {uploadConfig} from '../controller/uploads'

import login from '../controller/login'
import upload from '../controller/upload'
import user from '../controller/user'


router.prefix('/v2')

//路由拦截器
// router.use("*", intercept)

router

  .post('/login',login.login)
  // 
  .post('/upload',uploadConfig.single('file'),upload.upload)
  
  .post('/userList',user.userList)


module.exports = router
