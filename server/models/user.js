const db = require('./db');
const Sequelize = require('sequelize').Sequelize;

module.exports = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    level: Sequelize.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
});