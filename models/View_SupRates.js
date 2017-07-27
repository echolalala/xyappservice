/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('View_SupRates', {
    CS_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CG_GoodCategoryid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CG_Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CG_GoodsID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CS_UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CS_UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CS_GoodsName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CS_GoodsValue: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    CS_CreateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CU_AdminID: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'View_SupRates'
  });
};
