const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./router");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "..", "public/")));
app.use("/", router);

app.listen(PORT, () => {
	console.log("check out the app at http://localhost:${PORT}");
});
