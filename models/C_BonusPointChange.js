/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_BonusPointChange', {
    CB_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CB_UserID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CB_UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CB_ChangeValue: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CB_BeforePoint: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CB_AfterPoint: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CB_CreateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CB_Des: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CB_Type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CB_OrderID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CB_SubOrderID: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'C_BonusPointChange'
  });
};
