const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize').Sequelize;
const send = require('./send');
const Class = require('../models/class');

const getClass = (req, res, next) => {
    const id = req.params.id;
    Class.findByPk(id).then(klass => {
        req.output = klass;
        return next();
    }).catch(err => {
        console.log(err);
        return next(err);
    });
}

const getClasses = (req, res, next) => {
    const filter = {
        order: [['code', 'ASC']]
    };
    Class.findAll(filter).then(classes => {
        req.output = classes;
        return next();
    }).catch(err => {
        console.log(err);
        return next(err);
    });
}

const getClassSections = (req, res, next) => {
    const id = req.params.id;
    Class.sequelize.query(`SELECT s.section_letter, r.number, b.name
        FROM section s
        LEFT JOIN room r ON s.room = r.id
        LEFT JOIN building b ON r.building_id = b.id
        WHERE s.class_id = :id`,
    {
        type: Class.sequelize.QueryTypes.SELECT,
        replacements: { id }
    }).then(sections => {
        req.output = sections;
        return next();
    }).catch(err => {
        console.log(err);
        return next(err);
    });
}

router.get('/api/class/list', getClasses, send);
router.get('/api/class/:id', getClass, send);
router.get('/api/class/:id/sections', getClassSections, send);
module.exports = router;