/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_WebLog', {
    CS_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CS_ModuleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CS_Type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CS_Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CS_UserID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CS_Content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CS_Time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CS_IP: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'C_WebLog'
  });
};
