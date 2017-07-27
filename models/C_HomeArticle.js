/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_HomeArticle', {
    CH_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CH_ColumnId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CH_Title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CH_Content: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CH_Url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CH_Sort: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CH_IsShow: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    CH_Time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '(getdate())'
    }
  }, {
    tableName: 'C_HomeArticle'
  });
};
