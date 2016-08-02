var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
// 后台页面
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/manage', function(req, res, next) {
  res.render('manage');
});

//处理与数据库交互的业务
var dao = require('../dao/userDao');

router.post('/add', function(req, res, next) {
	/*optional stuff to do after success */
	dao.add(req, res, next);
});

router.post('/delete', function(req, res, next) {
	/*optional stuff to do after success */
	dao.delete(req, res, next);
});
router.post('/modify', function(req, res, next) {
	/*optional stuff to do after success */
	dao.update(req, res, next);
});

router.post('/select_id', function(req, res, next) {
	/*optional stuff to do after success */
	dao.queryById(req, res, next);
});
//默认获取数据按照type来获取
router.post('/select', function(req, res, next) {
	/*optional stuff to do after success */
	dao.queryType(req, res, next);
});

//测试
router.get('/test', function(req, res, next) {
  res.render('test');
});

module.exports = router;
