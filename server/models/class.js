const db = require('./db');
const Sequelize = require('sequelize').Sequelize;

module.exports = db.define('class', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: Sequelize.STRING,
    name: Sequelize.STRING,
    major: Sequelize.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
});