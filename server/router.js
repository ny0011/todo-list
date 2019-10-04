const express = require("express");
const os = require("os");
const router = express.Router();
const db = require("./dbconnection");

router.get("/api/getUsername", (req, res, next) => {
	res.send({ username: os.userInfo().username });
});

router.get("/api/lists", (req, res) => {
	res.send([
		{
			id: 0,
			image: "https://placeimg.com/64/64/1",
			text: "ㅎㅎ"
		},
		{
			id: 1,
			image: "https://placeimg.com/64/64/2",
			text: "ㅇㅇ"
		},
		{
			id: 2,
			image: "https://placeimg.com/64/64/3",
			text: "ㄴㄴ"
		}
	]);
});

/*
router.get("/getData", (req, res) => {
	db.query("select * from table", (err, rows) => {
		if (!err) {
			res.send(rows);
		} else {
			console.log(`query error: ${error}`);
			res.send(err);
		}
	});
});
*/

module.exports = router;
