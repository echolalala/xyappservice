/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_Notice', {
    CN_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CN_Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CN_ShortTitle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CN_Content: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CN_CreateByID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CN_UpdateByID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CN_CreateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CN_UpdateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CN_IsRed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CN_IsShow: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CN_IsTop: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    _MASK_FROM_V2: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'C_Notice'
  });
};
