var Sequelize = require('sequelize');  
var dbconfig=require('./dbconfig.js');

var mysequelize= new Sequelize(  
    dbconfig.database, // 数据库名  
    dbconfig.username,   // 用户名  
    dbconfig.password,   // 用户密码  
    {  
        'dialect': 'mssql',  // 数据库使用mysql  'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql'
        'host': dbconfig.host, // 数据库服务器ip  
        'port': dbconfig.port,        // 数据库服务器端口  
        'define': {  
            // 字段以下划线（_）来分割（默认是驼峰命名风格）  
            'underscored': true,
            'timestamps': false  
        }  
    }  
);  

module.exports=mysequelize;