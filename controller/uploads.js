
import multer from 'koa-multer'
import md5 from 'md5-node'
// 文件上传配置
// 文件夹名称（日期）
let dirDate = new Date().toJSON().substr(0, 10).replace(/[-T]/g, '');

// 函数式导出  已弃用
// export function upload(){
//   let imgPath = `/uploads/`;
//   const storage = multer.diskStorage({
//     // 文件保存路径
//     destination:imgPath,
//     // 修改文件名称
//     filename: function (req, file, cb) {
//       var fileFormat = (file.originalname).split(".");
//       cb(null,md5(Math.round(new Date().getTime()/1000)) + "." + fileFormat[fileFormat.length - 1]);
//     }
//   })
//   // 加载配置
//   var uploadConfig = multer({ storage: storage });
//   return uploadConfig;
// }

let imgPath = `./uploads/`;
const storage = multer.diskStorage({
  // 文件保存路径
  destination:imgPath,
  // 修改文件名称
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");
    cb(null,md5(Math.round(new Date().getTime()/1000)) + "." + fileFormat[fileFormat.length - 1]);
  }
})
// 加载配置
export const uploadConfig = multer({ storage: storage });


// 文件命名规则
export function nameRule(type){
  let name = `uploads/${type}/${dirDate}/`;
  return name;
}