'use strict';
module.exports = function(sequelize, DataTypes) {
  var Supplier = sequelize.define('Supplier', {
    companyname: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Supplier.belongsTo(models.Product);
      }
    }
  });
  return Supplier;
};