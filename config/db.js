
import Sequelize from 'sequelize'
import config from './config'

const sequelize = new Sequelize(
  config.mysql.database,
  config.mysql.username,
  config.mysql.password,
  {
    ...config.mysql.params
  }
)

// 判断数据库的链接成功or失败
sequelize
  .authenticate()
  .then(() => {
    console.log('database connection successfully.');

  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
  
/**
 * 同步model   
 * force:false   CREATE TABLE IF NOT EXISTS 'table'
 * 若数据库存在对应表   则不会重新创建
 * 若model改动后 同步后 以下代码可注释掉
 * （不注释可能会打印出过多建表信息）
 */
// sequelize
//   .sync({force:false})
//   .then(function () {
//     console.log('models synced');
//   })
export default sequelize;