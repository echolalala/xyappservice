/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_SysLogType', {
    CS_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CS_ParentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CS_ModuleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CS_ModuleName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CS_ModuleEnglish: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CS_ModuleType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    _MASK_FROM_V2: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'C_SysLogType'
  });
};
