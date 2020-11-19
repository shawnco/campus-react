const db = require('./db');
const Sequelize = require('sequelize').Sequelize;

module.exports = db.define('building', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING
}, {
    freezeTableName: true,
    timestamps: false
});