const db = require('./db');
const Sequelize = require('sequelize').Sequelize;

module.exports = db.define('section', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    class_id: Sequelize.INTEGER,
    room: Sequelize.STRING,
    professor_id: Sequelize.INTEGER,
    section_letter: Sequelize.STRING
}, {
    freezeTableName: true,
    timestamps: false
});