/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_CapitalChanges', {
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
    CC_OrderID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CC_SubOrderID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CC_GoodID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CC_GoodName: {
      type: "NCHAR",
      allowNull: true
    },
    CC_ValueType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CC_Value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CC_BeforeValue: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CC_AfterValue: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CC_Time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    CC_State: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CC_Mes: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CC_SUPGoodID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'C_CapitalChanges'
  });
};
