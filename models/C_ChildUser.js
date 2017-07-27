/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_ChildUser', {
    CC_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CC_FatherID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CC_UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CC_PWD: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CC_Msg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CC_IsDel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CC_Time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    }
  }, {
    tableName: 'C_ChildUser'
  });
};
