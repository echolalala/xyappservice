/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_GoodCategory', {
    CG_Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CG_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'C_GoodCategory'
  });
};
