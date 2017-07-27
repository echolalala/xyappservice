/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_Authority', {
    CA_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CA_AuthorityName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CA_AuthorityPath: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CA_ParentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CA_MenuLevel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CA_IsTibetanMenu: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CA_MenuSort: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CA_MenuNews: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'C_Authority'
  });
};
