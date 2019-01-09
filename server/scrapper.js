const express = require('express');
const router = express.Router();
const cheerio = require('cheerio');
const rp = require('request-promise')

router.get('/', (req,res) => {
    let title = ''
    rp(req.query.url)
    .then(data => {
        const $ = cheerio.load(data)
        title = $('title').text()
        res.send(title)
    })
    .catch(err => console.log(err.message))
})

module.exports = router
