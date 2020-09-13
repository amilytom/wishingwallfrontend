// 默认dev配置
const config = {
  DEBUG: true,
  // mysql数据库连接配置
  MYSQL: {
    host: 'localhost', // MYSQL的主机配置
    database: 'wishforyou', // MYSQL的数据库名称
    username: 'root', // MYSQL的用户名
    password: '246810' // MYSQL的密码
  }
};

if (process.env.NODE_ENV === 'production') {
  // 生产环境MYSQL数据库连接配置
  config.MYSQL = {
    host: 'localhost', // MYSQL的主机配置
    database: 'wishforyou', // MYSQL的数据库名称
    username: 'root', // MYSQL的用户名
    password: 'root' // MYSQL的密码
  };
}

module.exports = config;
