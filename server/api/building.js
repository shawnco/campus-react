const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize').Sequelize;
const Building = require('../models/building');
const Room = require('../models/room');
const send = require('./send');

const getBuilding = (req, res, next) => {
    const id = req.params.id;
    Building.findByPk(id).then(building => {
        req.output = building;
        return next();
    }).catch(err => {
        console.log(err);
        return next(err);
    });
}

const getBuildingClasses = (req, res, next) => {
    const id = req.params.id;
    Building.sequelize.query(`SELECT DISTINCT c.*
        FROM building b
        LEFT JOIN room r ON r.building_id = b.id
        LEFT JOIN section s ON s.room = r.id
        LEFT JOIN class c ON s.class_id = c.id
        WHERE b.id = :id
        ORDER BY c.code`, 
    {
        type: Building.sequelize.QueryTypes.SELECT,
        replacements: { id }
    }).then(rows => {
        req.output = rows;
        return next();
    }).catch(err => {
        console.log(err);
        return next(err);
    });
}

const getBuildingRooms = (req, res, next) => {
    const id = req.params.id;
    const filter = {
        where: {
            building_id: id
        }
    };
    Room.findAll(filter).then(rooms => {
        req.output = rooms;
        return next();
    }).catch(err => {
        console.log(err);
        return next(err);
    });
}

const listBuildings = (req, res, next) => {
    Building.findAll().then(buildings => {
        req.output = buildings;
        return next();
    }).catch(err => {
        console.log(err);
        return next(err);
    });
}

router.get('/api/building/list', listBuildings, send);
router.get('/api/building/:id', getBuilding, send);
router.get('/api/building/:id/classes', getBuildingClasses, send);
router.get('/api/building/:id/rooms', getBuildingRooms, send);
module.exports = router;