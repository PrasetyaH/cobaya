'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    itemname: DataTypes.STRING,
    desription: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Product.hasMany(models.Supplier);
      }
    }
  });
  return Product;
};