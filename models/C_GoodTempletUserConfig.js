/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_GoodTempletUserConfig', {
    CG_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CG_GoodTempletID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CG_UserID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CG_InterFace: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CG_InterKey: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CG_InterKey2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CG_State: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    CG_CreateDatetime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    CG_UpdateDatetime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    CG_Url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CG_QueryUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CG_PersonalizedName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'C_GoodTempletUserConfig'
  });
};
