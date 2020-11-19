const db = require('./db');
const Sequelize = require('sequelize').Sequelize;

module.exports = db.define('major', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    code: Sequelize.INTEGER,
    description: Sequelize.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
});