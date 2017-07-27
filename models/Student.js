/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Student', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Student'
  });
};
