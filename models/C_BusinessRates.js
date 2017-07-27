/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_BusinessRates', {
    CB_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CB_UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CB_UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CB_GoodsID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CB_GoodsName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CB_GoodsValue: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CB_CreateTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'C_BusinessRates'
  });
};
