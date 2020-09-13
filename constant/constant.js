// 定义一个常量对象
const staticObj = {
  //默认请求成功
  DEFAULT_SUCCESS: {
    code: 10000,
    msg: '请求成功'
  },
  //默认请求失败
  DEFAULT_ERROR: {
    code: 188,
    msg: '请求失败'
  },
  // 定义错误返回-缺少必要的参数
  LACK: {
    code: 199,
    msg: '缺少必要的参数'
  }
};

module.exports = staticObj;
