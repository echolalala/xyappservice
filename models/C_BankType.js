/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_BankType', {
    CB_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CB_BankName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CB_IsBankClass: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CB_Status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    }
  }, {
    tableName: 'C_BankType'
  });
};
