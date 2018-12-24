
import fs from 'fs'
import { nameRule } from '../controller/uploads'
import { models } from '../models/index'

const NcUser = models.ncUser;

// 图片上传
async function upload(ctx) {
  console.log('ssssssssss',ctx.req.file)
  let name = nameRule('jpg') + ctx.req.file.filename;
  // (若上一步需上传阿里等图床时需要读取本地文件)上传后  是否成功  删除文件
  // fs.unlinkSync(`./uploads/${ctx.req.file.filename}`);
  ctx.body = {
    code:0,
    msg:'成功',
    data:`/${name}`,
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