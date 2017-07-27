/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_Capital', {
    CC_UserID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CC_UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CC_TotalFunds: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '((0))'
    },
    CC_CardFunds: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '((0))'
    },
    CC_CFreezeFunds: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '((0))'
    },
    CC_WaitPayFunds: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '((0))'
    },
    CC_Deposit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '((0))'
    },
    CC_SysDeposit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '((0.0000))'
    },
    CC_SupplierBonusPoint: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CC_PurchaserBonusPoint: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'C_Capital'
  });
};
