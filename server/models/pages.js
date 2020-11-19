const db = require('./db');
const Sequelize = require('sequelize').Sequelize;

module.exports = db.define('pages', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    route: Sequelize.STRING,
    user_level: Sequelize.STRING,
    menu: Sequelize.INTEGER
}, {
    freezeTableName: true,
    timestamps: false
});