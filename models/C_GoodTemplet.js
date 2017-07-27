/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_GoodTemplet', {
    CG_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CG_ParentId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CG_Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CG_State: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    CG_DLLName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CG_AssemblyType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CG_Memo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'C_GoodTemplet'
  });
};
