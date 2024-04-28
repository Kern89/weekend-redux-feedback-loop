const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('POST:', req.body);
    const sqlText = `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES($1, $2, $3, $4);
    `
    const sqlValues = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]
    pool.query(sqlText, sqlValues).then((response) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500)
    })
});




module.exports = router;