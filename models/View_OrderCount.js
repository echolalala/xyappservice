/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('View_OrderCount', {
    CU_ID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CU_UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CU_AuditStatus: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CU_SupplierPower: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CO_ID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CO_Result: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CO_SubTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CO_SupUserID: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'View_OrderCount'
  });
};
