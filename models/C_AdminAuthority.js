/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_AdminAuthority', {
    CA_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CA_AdminID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CA_AuthorityID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CA_PurviewMenuId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CA_UserPurviewSort: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CA_UserPurviewType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CA_UserPurviewNews: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'C_AdminAuthority'
  });
};
