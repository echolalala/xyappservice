/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_Message', {
    CM_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CM_Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CM_IsRead: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CM_SenderID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CM_AddresseeID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CM_SenTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CM_Content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CM_GUID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'C_Message'
  });
};
