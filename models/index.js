
import sequelize from '../config/db';

// 引入表结构
const user = sequelize.import('./user.js'); 
const ncUser = sequelize.import('./nc_user.js'); 


// 表关系

// 导出model
export const models = {
  user,
  ncUser,
}