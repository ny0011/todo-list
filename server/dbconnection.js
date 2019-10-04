const mysql = require("mysql");
const connection = mysql.createPool({
	host: "",
	port: 3360,
	user: "user",
	password: "pw",
	database: "database"
});

module.exports = connection;
