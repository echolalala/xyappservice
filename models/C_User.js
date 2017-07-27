/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_User', {
    CU_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CU_UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CU_PWD: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CU_SuperPWD: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CU_UserKey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CU_Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_Contact: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_QQ: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_Email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_EmailValidate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    CU_Phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_PhonelValidate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CU_Domain: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_Address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_IDCardValidate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CU_IDCards: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    CU_IDCardPic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_IDCardPic2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_RegTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CU_LoginLastTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CU_Validate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CU_AdminID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CU_ServiceID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CU_CardSMTType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CU_IPAddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_Note: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_UserType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CU_Company: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_License: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_IsAgent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    CU_Agent_UserID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    CU_Lowest: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '((10000))'
    },
    CU_Linein: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    CU_Kiting: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_SendStop: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((1))'
    },
    CU_OpenApi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    CU_Payforother: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CU_SendUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_Kiting_CDSC: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_Kiting_Ratio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_Integral: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    CU_IDCardPic3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_DynamicKey: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_BuyerPower: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CU_SupplierPower: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CU_ApiIp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_ComputerInfo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CU_AuditStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CU_BuyMostNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CU_BuyMostSum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'C_User'
  });
};
