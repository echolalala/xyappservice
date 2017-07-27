/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_HomeColumn', {
    CH_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CH_ParentId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CH_Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CH_Type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CH_Url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CH_NewsID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    CH_Sort: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CH_IsShow: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    CS_Image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CH_ProID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'C_HomeColumn'
  });
};
