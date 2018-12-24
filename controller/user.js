
import { models } from '../models/index'

const User = models.user;

async function userList(ctx) {
  // console.log(ctx.request)
  var userList = await User.findAll();
  ctx.body = {
    code:0,
    data:{
      'userList':userList,
    },
    msg:'成功'
  }
}


export default {
  userList,
}