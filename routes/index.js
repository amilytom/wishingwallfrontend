// 引入express对象
var express = require('express');
// 引入路由对象
var router = express.Router();

// 引入自定义的controller
const IndexController = require('../controllers/index')

// 定义首页路由
router.get('/', IndexController.getList);

// 定义提交表单路由
router.post('/add', IndexController.add);

module.exports = router;
