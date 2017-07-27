var express = require('express');
var router = express.Router();

//var Sequelize = require('sequelize');  
/*var dbconfig=require('../dbconfig.js');
var sequelize = new Sequelize(  
    dbconfig.database, // 数据库名  
    dbconfig.username,   // 用户名  
    dbconfig.password,   // 用户密码  
    {  
        'dialect': 'mysql',  // 数据库使用mysql  
        'host': dbconfig.host, // 数据库服务器ip  
        'port': dbconfig.port,        // 数据库服务器端口  
        'define': {  
            // 字段以下划线（_）来分割（默认是驼峰命名风格）  
            'underscored': true,
            'timestamps': false  
        }  
    }  
);  */
var mysequelize=require('../mysequelize');
const Project = mysequelize.import('../models/C_Admin.js')



router.get('/', (req, res, next)=> {
   Project.findAll().then((data)=>{
   	  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Foo', 'bar');
  res.end(JSON.stringify(data));

   })
/*	mysequelize.query('select * from c_admin').then((data)=>{
		//res.writeHead(200, {‘Content-Type’= ‘text/plain;charset=utf-8’});
		res.send(JSON.stringify(data));
		res.end( JSON.stringify(res) ,'utf-8');
	})*/


});

module.exports = router;
