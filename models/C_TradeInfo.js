/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_TradeInfo', {
    CT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CT_UserID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CT_UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CT_CreateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CT_Content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CT_GoodNo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CT_Type: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'C_TradeInfo'
  });
};
