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
			text: "ㅎㅎㅎ",
			checked: false
		},
		{
			id: 1,
			text: "ㅇㅇㅇ",
			checked: true
		},
		{
			id: 2,
			text: "ㄴㄴㄴ",
			checked: false
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
