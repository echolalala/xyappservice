/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_BindOpenPlat', {
    CD_UserID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CD_OpenID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CD_OpenType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((1))'
    },
    CD_Nickname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CD_Sex: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    CD_City: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CD_Country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CD_Province: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CD_Headimgurl: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'C_BindOpenPlat'
  });
};
