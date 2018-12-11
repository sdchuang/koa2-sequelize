const router = require('koa-router')()

import {intercept} from '../utils/intercept'
// 引入controller
import {uploadImg} from '../controller/uploads'

import login from '../controller/login'
import upload from '../controller/upload'


router.prefix('/v2')

//路由拦截器
router.use("*", intercept)

router

  .post('/login',login.login)
  // 
  .post('/upload',uploadImg().single('file'),upload.upload)
  .put('/user/:user_id',upload.completeUserInfo)




module.exports = router
