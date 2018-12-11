# koa2-sequelize
本项目采用koa2+sequelize(ORM)搭建一个node后端服务器

项目包含路由、路由拦截器、日志记录、jwt鉴权、文件上传、数据库连接（包含链接、model的导入、表关系、使用等）

其中解决node对es6/es7语法兼容的问题：

1.node对import/export的支持

2.扩展运算符（...）的支持

3.对象结尾（,）的使用

等等（babel 设置的stage-0，几乎支持全部的新语法）

启动时 nodemon/pm2等  直接启动 run.js 文件即可
