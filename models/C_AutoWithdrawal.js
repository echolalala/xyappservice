/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_AutoWithdrawal', {
    CA_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CA_UserID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CA_UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CA_RemainMoney: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '((0))'
    },
    CA_WithdrawalMoney: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CA_WithdrawalTime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CA_Frequency: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CA_BankInfoID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CA_CreateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CA_UpdateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CA_State: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CA_IsDel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'C_AutoWithdrawal'
  });
};
