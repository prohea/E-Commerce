// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne( {
  foreign: '',
  onDelete: '',
});

// Categories have many Products
Category.belongsTo( {
  foreignKey: '',
});

// Products belongToMany Tags (through ProductTag)
Tag.hasMany( {
  foreignKey: '',
  onDelete: '',
});

// Tags belongToMany Products (through ProductTag)
ProductTag.belongsTo( {
  foreignKey: '',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
