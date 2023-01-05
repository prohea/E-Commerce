import express, { json, urlencoded } from "express";
import routes from "./routes";
// import sequelize connection
import { sync } from "./config/connection";
const app = express();
const PORT = process.env.PORT || 5001;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log("Now listening!"));
});
