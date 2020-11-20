const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize').Sequelize;
const send = require('./send');
const Page = require('../models/page');

const getPages = (req, res, next) => {
    const level = req.params.level;
    Page.sequelize.query(`SELECT * FROM pages WHERE user_level <= :level AND menu = 1`,
    {
        type: Page.sequelize.QueryTypes.SELECT,
        replacements: { level }
    }).then(pages => {
        req.output = pages;
        return next();
    }).catch(err => {
        console.log(err);
        return next(err);
    });
}

router.get('/api/pages/:level', getPages, send);
module.exports = router;