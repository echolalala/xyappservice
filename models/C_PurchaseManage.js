/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_PurchaseManage', {
    CP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CP_BuyerID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CP_Purchase_State: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CP_GoodsSupID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CP_SupState: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CP_CreateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CP_IsDelete: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CP_Mj: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    CP_GoodsPriceCeiling: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'C_PurchaseManage'
  });
};
