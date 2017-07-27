/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_Complain', {
    CO_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CO_OrderID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CO_ComplainType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CO_CreateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CO_SubUserID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CO_UserName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_UserID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CO_SubUserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CO_ComplainContent: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_ComplainImg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_GoodName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_WishDealWith: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CO_States: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CO_EndTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CO_ArbitrationTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CO_ArbitrationType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CO_ArbitrationContent: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_ArbitrationImg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_IsArbitration: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'C_Complain'
  });
};
