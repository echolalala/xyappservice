/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_Logs', {
    CO_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CO_Platform: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CO_Modlu: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CO_Orderid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_Userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CO_Date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CO_Content: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_accounts: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CO_qq: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'C_Logs'
  });
};
