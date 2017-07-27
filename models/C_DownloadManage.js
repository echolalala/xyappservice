/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_DownloadManage', {
    CD_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CD_UserID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    CD_DownType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CD_SubmitTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CD_DownState: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CD_FileDir: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'C_DownloadManage'
  });
};
