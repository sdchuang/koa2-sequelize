
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
export default sequelize;