
import { models } from '../models/index'

const User = models.user;

// 图片上传
async function upload(ctx) {
  console.log('>>>>>>>>>>>>',ctx.req.file)
  
  ctx.body = {
    code:0,
    msg:'成功',
    data:ctx.req.file.destination + ctx.req.file.filename,
  }
}

// 补全用户信息
async function completeUserInfo (ctx){
  console.log(ctx.params.user_id)
  await NcUser.update({
    avatar:ctx.request.body.avatar,
  },{
    where:{user_id:ctx.params.user_id}
  })
  var userInfo = await NcUser.find({
    where:{user_id:ctx.params.user_id}
  })
  ctx.body = {
    code:0,
    msg:'成功',
    data:userInfo,
  }
}

export default {
  upload,
  completeUserInfo,
}