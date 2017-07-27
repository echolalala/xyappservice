/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_Admin', {
    CA_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CA_UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CA_PWD: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CA_SuperPWD: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CA_UserType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CA_Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CA_Tel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CA_Email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CA_Address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CA_IDCards: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    CA_RegTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CA_LoginLastTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CA_Note: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CA_Status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    CA_QQ: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CA_Phone: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'C_Admin'
  });
};
