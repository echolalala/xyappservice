/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('View_PurchaseManage', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rechargeType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    goodsName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    goodsValue: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    goodsExchange: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    goodsArea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    purchasePriceCeiling: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    goodTypePriceCeiling: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ghzt: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startTime: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endTime: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cgzt: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    goodSupState: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CU_ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CG_ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Mini: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Max: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CP_BuyerID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CG_GoodCategoryid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    cgid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CG_CountType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CG_CustomCount: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'View_PurchaseManage'
  });
};
