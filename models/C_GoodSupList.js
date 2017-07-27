/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_GoodSupList', {
    CG_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CG_UserID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CG_GoodID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CG_Value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CG_Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CG_Expire: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CG_Exchange: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '((0.8))'
    },
    CG_Cost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '((0))'
    },
    CG_Enalbe: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CG_OrdersDateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CG_DCType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    CG_DCSum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    CG_QuantityMini: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    CG_QuantityMax: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((50000))'
    },
    CG_Area: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '全国'
    },
    CG_Stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((-1))'
    },
    CG_AdminEnalbe: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    CG_Priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CG_RecentAssignmentTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CG_StartTime: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '00:00:00'
    },
    CG_EndTime: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '23:59:59'
    },
    CG_RechargeType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((2))'
    },
    CG_CountType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    CG_CustomCount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CG_Auditing: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    CG_IntoTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CG_Reason: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CG_GoodTempletID: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: '((0))'
    },
    CG_PeriodTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CG_FailTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '2017-01-01'
    },
    CG_TempletUserConfigID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CG_GoodCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CG_IsDel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CG_SupplyRange: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'C_GoodSupList'
  });
};
