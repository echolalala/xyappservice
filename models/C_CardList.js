/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_CardList', {
    CO_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CO_Userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO_ProductID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CO_ProductName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_IsUse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO_Area: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_Account: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_SubOrderID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_OrderID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CO_CardNum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_CardPWD: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_SubValue: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO_RealValue: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO_SubTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    CO_TreatTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    CO_Result: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO_AdminID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO_DoAdminID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    CO_ISDel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO_Ext: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_UseCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO_TrueFace: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO_UPlogID: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: '((0))'
    },
    CO_CardType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CO_Remarks: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_ReturnUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_ReturnMes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_ReturnCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_ReturnDepict: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_SendCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CO_CallBackStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'C_CardList'
  });
};
