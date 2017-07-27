//sequelize-auto -o "./models" -d xysupsalesystem -h 114.55.72.134 -u root -p 3306 -x Anakin!123 -e mysql
//sequelize-auto -o "./models" -d 游戏供货平台 -h 192.168.1.242 -u sa -x 123456 -e mssql
//自动生成数据库table
var config = {
    database: '游戏供货平台', // 使用哪个数据库
    username: 'sa', // 用户名
    password: '123456', // 口令
    host: '192.168.1.242', // 主机名
    port: 1433 // 端口号，MySQL默认3306
};

module.exports=config;