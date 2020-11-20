const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize').Sequelize;
const send = require('./send');
const User = require('../models/user');

const getUser = (req, res, next) => {
    const id = req.params.id;
    const filter = {
        where: { id }
    };
    User.findByPk(filter).then(user => {
        req.output = user;
        return next();
    }).catch(err => {
        console.log(err);
        return next(err);
    });
}

const login = (req, res, next) => {
    // Yes, I know this is bad but it's just a demo
    const {username, password} = req.params;
    const filter = {
        where: {
            username,
            password
        }
    };
    User.findOne(filter).then(user => {
        req.output = user;
        return next();
    }).catch(err => {
        console.log(err);
        return next(err);
    });
}

router.get('/api/user/:id', getUser, send);
router.get('/api/login/:username/:password', login, send);
module.exports = router;
