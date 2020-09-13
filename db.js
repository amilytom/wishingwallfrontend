// 引入sequelize模块
const Sequelize = require('sequelize');
// 引入数据库连接配置
const CONFIG = require('./config');

// 实例化数据库对象
var sequelize = new Sequelize(
  CONFIG.MYSQL.database,
  CONFIG.MYSQL.username,
  CONFIG.MYSQL.password,
  {
    host: CONFIG.MYSQL.host,
    dialect: 'mysql', // 数据库类型
    logging: CONFIG.DEBUG ? console.log : false, // 是否打印日志
    // 配置数据库连接池
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    timezone: '+08:00'
  }
);

// 导出实例化数据库对象
module.exports = sequelize;
