/*
 *	此文件实现与MySQL交互
 */
var mysql = require('mysql');
var conf = require('../conf/db');
var sql = require('./sqlMapping');
//引入moment用以获取及格式化时间
var moment = require('moment');

// 使用连接池，提升性能
var pool  = mysql.createPool({
        host        : conf.mysql.host,
        user        : conf.mysql.user,
        password    : conf.mysql.password,
        database    : conf.mysql.database,
        port        : conf.mysql.port
    });

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    add: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            //var param = req.query || req.params;
            var type = req.body.type;
            var title = req.body.title;
            var img = req.body.img;
            var time = moment().format('YYYY-MM-DD');

            // 建立连接，向表中插入值
            // 'INSERT INTO news_table(TYPE, TITLE, IMG,TIME) VALUES(?,?,?,?)',
            connection.query(sql.add, [type, title, img, time], function(err, result) {

                // 以json形式，把操作结果返回给前台页面
                jsonWrite(res, result);
                // 释放连接 
                connection.release();
            });
        });
    },
    delete: function (req, res, next) {
        // delete by Id
        pool.getConnection(function(err, connection) {
            var id = req.body.id;
            connection.query(sql.delete, id, function(err, result) {

                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    update: function (req, res, next) {
        // update by id        
        var id = req.body.id;
        var type = req.body.type;
        var title = req.body.title;
        var img = req.body.img;
        var time = moment().format('YYYY-MM-DD');

        if(type == null || img == null || time == null) {
        	console.log('bad arguments');
            jsonWrite(res, undefined);
            return;
        }

        pool.getConnection(function(err, connection) {
        	// 'UPDATE news_table set TYPE=?, TITLE=? IMG=? TIME=? WHERE ID=?'
            connection.query(sql.update, [type, title, img, time, id], function(err, result) {

                jsonWrite(res, result);
                connection.release();
            });
        });

    },
    queryById: function (req, res, next) {
        var id = req.body.id;
        pool.getConnection(function(err, connection) {
        	//'SELECT * FROM news_table WHERE ID=?'
            connection.query(sql.queryById, id, function(err, result) {
                jsonWrite(res, result);
                connection.release();

            });
        });
    },
    queryType: function (req, res, next) {
    	var type = req.body.type;
    	
        pool.getConnection(function(err, connection) {
            connection.query(sql.queryType, type,function(err, result) {
            	//封装为json进行回传前端
                jsonWrite(res, result);
                connection.release();
            });
        });
    }
    
};

