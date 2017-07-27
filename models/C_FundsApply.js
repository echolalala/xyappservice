/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_FundsApply', {
    CF_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CF_UserID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CF_BeforeValue: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CF_AfterValue: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CF_DeductValue: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CF_Commission: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CF_Type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF_State: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF_Time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CF_Note: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CF_CheckUserID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CF_CheckTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CF_ChenkNote: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CF_PayUserID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CF_PayTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CF_PayNote: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CF_BankID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CF_UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CF_BankNum: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CF_Province: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CF_City: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CF_BankName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CF_BankType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CF_IsExport: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'C_FundsApply'
  });
};
