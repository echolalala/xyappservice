/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('View_AdminURates', {
    CB_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CG_GoodCategoryid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CG_Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CB_UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CB_UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CB_GoodsID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CB_GoodsName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CB_GoodsValue: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CB_CreateTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'View_AdminURates'
  });
};
