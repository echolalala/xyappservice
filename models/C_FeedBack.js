/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_FeedBack', {
    CF_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CF_UserID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF_UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CF_Title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF_Pic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CF_Content: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CF_CreateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CF_Type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF_State: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF_RelateID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF_RelateName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'C_FeedBack'
  });
};
