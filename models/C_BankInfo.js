/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_BankInfo', {
    CB_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CB_UserID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CB_BankID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CB_Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CB_BankNum: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CB_UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CB_Province: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CB_City: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CB_BankName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CB_Status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((1))'
    }
  }, {
    tableName: 'C_BankInfo'
  });
};
