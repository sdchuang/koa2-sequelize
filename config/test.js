
export default{
  mysql: {
    database: 'localtest',
    username: 'root',
    password: '123456',
    params: {
      host: 'localhost',
      port:'3306',
      dialect: 'mysql',
      define: {
        'underscored': true,
        'timestamps':false,//是否生成created_at等
      },
      timezone:'+08:00',//时区控制
      logging: console.log,//日志
      operatorsAliases: false,
      sync:{force:false},//强制同步生成表格
      pool: {//连接池
        max: 1000,
        min: 0,
        idle: 30000
      }
    },
  },
}