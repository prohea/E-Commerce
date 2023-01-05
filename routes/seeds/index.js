const seedCategories = require("./category-seeds").default;
const seedProducts = require("./product-seeds").default;
const seedTags = require("./tag-seeds").default;
const seedProductTags = require("./product-tag-seeds").default;

const sequelize = require("../config/connection");

const seedAll = async () => {
	await sequelize.sync({ force: true });
	console.log("\n----- DATABASE SYNCED -----\n");
	await seedCategories();
	console.log("\n----- CATEGORIES SEEDED -----\n");

	await seedProducts();
	console.log("\n----- PRODUCTS SEEDED -----\n");

	await seedTags();
	console.log("\n----- TAGS SEEDED -----\n");

	await seedProductTags();
	console.log("\n----- PRODUCT TAGS SEEDED -----\n");

	process.exit(0);
};

seedAll();
