/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_SysLog', {
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
    CS_RelationId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CS_Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CS_AdminName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CS_UserID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CS_Time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    CS_Content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CS_IP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    _MASK_FROM_V2: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'C_SysLog'
  });
};
