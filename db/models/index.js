// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category, {
  foreign: 'product_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.belongsTo(Product, {
  foreignKey: '',
});

// Products belongToMany Tags (through ProductTag)
Product.hasMany(ProductTag, {
  foreignKey: '',
  onDelete: 'CASCADE',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(ProductTag, {
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
