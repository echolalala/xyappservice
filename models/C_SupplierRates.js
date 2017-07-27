/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_SupplierRates', {
    CS_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CS_UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CS_UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CS_GoodsID: {
      type: DataTypes.INTEGER,
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
    }
  }, {
    tableName: 'C_SupplierRates'
  });
};
