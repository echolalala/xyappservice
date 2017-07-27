/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_ReplyComplaint', {
    CR_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CR_ComplainID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CR_OrderID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CR_ComplainType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CR_SubUserID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CR_SubUserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CR_ComplainContent: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CR_ComplainImg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CR_ReplyTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CR_WishDealWith: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CR_States: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CR_ArbitrationType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CR_ArbitrationContent: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CR_ArbitrationImg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CR_IsArbitration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CR_UserID: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'C_ReplyComplaint'
  });
};
