const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize').Sequelize;
const Major = require('../models/major');
const Class = require('../models/class');
const send = require('./send');

const listMajors = (req, res, next) => {
    const id = req.params.id;
    const filter = {
        order: [['code', 'ASC']]
    };
    Major.findAll(filter).then(majors => {
        req.output = majors;
        return next();
    }).catch(err => {
        console.log(err);
        return next(err);
    });
}

const getMajor = (req, res, next) => {
    const id = req.params.id;
    Major.findByPk(id).then(major => {
        req.output = major;
        return next();
    }).catch(err => {
        console.log(err);
        return next(err);
    });
}

const getMajorClasses = (req, res, next) => {
    const id = req.params.id;
    const filter = {
        where: {
            major: id
        }
    };
    Class.findAll(filter).then(classes => {
        req.output = classes;
        return next();
    }).catch(err => {
        console.log(err);
        return next(err);
    });
}

router.get('/api/major/list', listMajors, send);
router.get('/api/major/:id', getMajor, send);
router.get('/api/major/:id/classes', getMajorClasses, send);

module.exports = router;