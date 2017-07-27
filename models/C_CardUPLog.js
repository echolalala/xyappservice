/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_CardUPLog', {
    CC_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CC_UserID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CC_ProductId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CC_ProductName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CC_OperationNum: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CC_AfterOperationNum: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CC_SubTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    CC_Msg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CC_Remarks: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CC_OperationType: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'C_CardUPLog'
  });
};
