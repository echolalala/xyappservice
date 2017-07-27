/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('View_GoodSupList', {
    CU_UserName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CG_ID: {
      type: DataTypes.BIGINT,
      allowNull: false
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
      allowNull: false
    },
    CG_Cost: {
      type: DataTypes.DECIMAL,
      allowNull: false
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
      allowNull: false
    },
    CG_DCSum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CG_QuantityMini: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CG_QuantityMax: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CG_Area: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CG_Stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CG_AdminEnalbe: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CG_Priority: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CG_RecentAssignmentTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CG_StartTime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CG_EndTime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CG_RechargeType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CG_CountType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CG_CustomCount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CG_Auditing: {
      type: DataTypes.INTEGER,
      allowNull: true
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
      allowNull: true
    },
    CG_PeriodTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CG_FailTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CG_GoodCategoryid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    GoodTypeName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CC_UpdateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CC_SuccessCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CC_NoSupply: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CC_SuccessRate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    CC_RechargeTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CC_ComplaintRate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    CC_ComplaintTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'View_GoodSupList'
  });
};
