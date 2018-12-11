
import multer from 'koa-multer'
import md5 from 'md5-node'
// 文件上传配置
// 文件夹名称（日期）
let dirDate = new Date().toJSON().substr(0, 10).replace(/[-T]/g, '');

// export function uploads (dirPath){
//   let imgPath = __dirname + `/../../../uploads/${dirPath}/${dirDate}/`;
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

export function uploadImg(){
  let imgPath = `/uploads/jpg/${dirDate}/`;
  // let imgPath = __dirname + `/../../../uploads/jpg/${dirDate}/`;
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
  var uploadConfig = multer({ storage: storage });
  return uploadConfig;
}