const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 5001;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log("Now listening!"));
});
