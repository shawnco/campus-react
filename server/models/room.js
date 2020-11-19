const db = require('./db');
const Sequelize = require('sequelize').Sequelize;

module.exports = db.define('room', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    number: Sequelize.STRING,
    building_id: Sequelize.INTEGER,
    capacity: Sequelize.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
});