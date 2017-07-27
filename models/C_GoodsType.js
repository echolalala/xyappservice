/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_GoodsType', {
    CG_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CG_GoodCategoryid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CG_Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CG_State: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((2))'
    },
    CG_Expire: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CG_SupUser: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CG_Value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CG_PriceCeiling: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'C_GoodsType'
  });
};
