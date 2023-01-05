// import models
const Product = require("./Product").default;
const Category = require("./Category").default;
const Tag = require("./Tag").default;
const ProductTag = require("./ProductTag").default;

// Products belongsTo Category
Product.belongsTo(Category, {
	foreignKey: "category_id",
	onDelete: "CASCADE",
});

// Categories have many Products
Category.hasMany(Product, {
	foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
	through: ProductTag,
	foreignKey: "product_id",
	onDelete: "CASCADE",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
	through: ProductTag,
	foreignKey: "tag_id",
});

module.exports = {
	Product,
	Category,
	Tag,
	ProductTag,
};
