/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_GoodInformationStatistics', {
    CC_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CC_GoodSupListID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CC_GoodName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CC_UpdateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CC_SuccessCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CC_NoSupply: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CC_SuccessRate: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CC_RechargeTime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CC_ComplaintRate: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CC_ComplaintTime: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'C_GoodInformationStatistics'
  });
};
