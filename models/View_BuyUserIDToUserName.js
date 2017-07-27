/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('View_BuyUserIDToUserName', {
    CO_ID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CO_SubOrderID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CO_Account: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CO_GoodID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CO_GoodName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CO_GoodValue: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CO_Sum: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CO_Totalamount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    CO_Rechargeamount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    CO_ReturnUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_RechargeType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CO_BuyIP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_Area: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_SubTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CO_PlanTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CO_AcceptTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CO_TreatTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CO_BuyUserID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CO_SupUserID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CO_Islock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CO_Result: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CO_CallBackStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CO_ReslutPicURL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_Content: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_ServiceID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CO_BuyPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CO_MerchantIncome: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CO_TerraceProfit: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CO_SupPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CO_ChargeRegion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_ChargeServer: {
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
    CO_ReturnMes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_DoAdminID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CO_Ext: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_GoodSupListID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CO_Process: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CO_SendCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CO_SendDatetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CO_RType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CO_ptProfit: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CO_ChildName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_MainQQ: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_UserName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CG_Exchange: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'View_BuyUserIDToUserName'
  });
};
