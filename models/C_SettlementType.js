/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_SettlementType', {
    CS_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CS_Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CS_Day: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'C_SettlementType'
  });
};
