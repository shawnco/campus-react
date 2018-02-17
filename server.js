const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('public'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var db = new sqlite3.Database('db/campus-react.db');

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// BUILDING
app.get('/building/:id', function(req, res) {
    var id = req.params.id;
    db.get("SELECT * FROM building WHERE id = ?", [id], function(err, rows) {
        if(err){
            console.log(err);
            res.end(JSON.stringify(false));
        }else{
            res.end(JSON.stringify(rows));
        }
    });
});

app.get('/building/classes/:id', function(req, res){
    var id = req.params.id;
    db.all("SELECT * FROM v_class_building WHERE id = ?", [id], function(err, rows){
        if(err){
            res.end(JSON.stringify(false));
        }else{
            res.end(JSON.stringify(rows));
        }
    });
});

// BUILDINGS
app.get('/buildings/list', function(req, res) {
    db.all("SELECT * FROM building", function(err, rows) {
        if(err){
            console.log(err);
            res.end(JSON.stringify(false));
        }else{
            res.end(JSON.stringify(rows));
        }
    });
});

// CLASSES
app.get('/classes/list', function (req, res) {
    db.all("SELECT * FROM class", function (err, rows) {
        if (err) {
            console.log(err);
            res.end(JSON.stringify(false));
        } else {
            res.end(JSON.stringify(rows));
        }
    });
});

// ---- MAJORS
app.get('/majors/list', function (req, res) {
    db.all("SELECT * FROM major", function (err, rows) {
        if (err) {
            console.log(err);
            res.end(JSON.stringify(false));
        } else {
            res.end(JSON.stringify(rows));
        }
    })
})

// ---- PAGES
app.get('/pages/:level', function(req, res) {
    var level = req.params.level;
    db.all("SELECT * FROM pages WHERE user_level <= ? AND menu = 1", [level], function(err, rows) {
        if(err){
            res.end(JSON.stringify(false));
        }else{
            res.end(JSON.stringify(rows));
        }
    });
});

// ---- PROFESSOR
app.get('/professor/sections/:id', function(req, res){
    var id = req.params.id;
    db.all("SELECT * FROM v_professor_section WHERE professor_id = ?", [id], function(err, rows){
        if(err){
            console.log(err);
            res.end(JSON.stringify(false));
        }else{
            res.end(JOSN.stringify(rows));
        }
    })
})

// ---- ROOMS
app.get('/rooms/:building', function(req, res) {
    var building = req.params.building;
    db.all("SELECT * FROM room WHERE building_id = ?", [building], function(err, rows) {
        if(err){
            res.end(JSON.stringify(false));
        }else{
            res.end(JSON.stringify(rows));
        }
    });
});

// ---- USERS
app.get('/user/:id', function(req, res) {
    var id = req.params.id;
    db.get("SELECT * FROM user WHERE id = ?", [id], function(err, rows) {
        if(err){
            console.log(err);
        }else{
            res.end(JSON.stringify(rows));
        }
    });
});


app.listen(process.env.PORT || 8080, function(){
    console.log('ACTIVE');
});