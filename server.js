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
app.use(bodyParser.json());

var db = new sqlite3.Database('server/db/campus-react.db');

app.get('/ping', function (req, res) {
 return res.send('pong');
});



// BUILDING
app.get('/api/building/:id', function(req, res) {
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

app.get('/api/building/:id/classes', function(req, res){
    var id = req.params.id;
    db.all(`SELECT DISTINCT c.*
        FROM building b
        LEFT JOIN room r ON r.building_id = b.id
        LEFT JOIN section s ON s.room = r.id
        LEFT JOIN class c ON s.class_id = c.id
        WHERE b.id = ?
        ORDER BY c.code`, [id], function(err, rows){
        if(err){
            res.end(JSON.stringify(false));
        }else{
            res.end(JSON.stringify(rows));
        }
    });
});

// SECTIONS
app.get('/api/class/:id/sections', (req, res) => {
    var id = req.params.id;
    db.all(`SELECT s.section_letter, r.number, b.name
        FROM section s
        LEFT JOIN room r ON s.room = r.id
        LEFT JOIN building b ON r.building_id = b.id
        WHERE s.class_id = ?`, [id], (err, rows) => {
        if (err) {
            res.end(JSON.stringify(false));
        } else {
            res.end(JSON.stringify(rows));
        }
    });
})

// BUILDINGS
app.get('/api/buildings/list', function(req, res) {
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
app.get('/api/classes/list', function (req, res) {
    db.all("SELECT * FROM class ORDER BY code ASC", function (err, rows) {
        if (err) {
            console.log(err);
            res.end(JSON.stringify(false));
        } else {
            res.end(JSON.stringify(rows));
        }
    });
});

app.get('/api/class/:id', (req, res) => {
    db.get('SELECT * FROM class WHERE id = ?', [req.params.id], (err, rows) => {
        if (err) {
            console.log(err);
            res.end(JSON.stringify(false));
        } else {
            res.end(JSON.stringify(rows));
        }
    });
});

// FLOWCHART
app.get('/api/flowchart/:id', function(req, res){
    var id = req.params.id;
    db.all("SELECT * FROM class_dependency WHERE major_id = ?", [id], function(err,rows){
        if(err){
            console.log(err);
            res.end(JSON.stringify(false));
        }else{
            db.all("SELECT * FROM major_dependency WHERE major_id = ?", [id], function(err,rows2){
                if(err){
                    console.log(err);
                    res.end(JSON.stringify(false));
                }else{
                    // need to merge the two together
                    res.end(JSON.stringify(rows.concat(rows2)));
                }
            })
        }
    })
})

// ---- MAJORS
app.get('/api/majors/list', function (req, res) {
    db.all("SELECT * FROM major ORDER BY code ASC", function (err, rows) {
        if (err) {
            console.log(err);
            res.end(JSON.stringify(false));
        } else {
            res.end(JSON.stringify(rows));
        }
    })
})

app.get('/api/major/:id', (req, res) => {
    db.get('SELECT * FROM major WHERE id = ?', [req.params.id], (err, rows) => {
        if (err) {
            console.log(err);
            res.end(JSON.stringify(false));
        } else {
            res.end(JSON.stringify(rows));
        }        
    })
})

app.get('/api/major/:id/classes', (req, res) => {
    var id = req.params.id;
    db.all('SELECT * FROM class WHERE major = ?', [id], (err, rows) => {
        if (err) {
            console.log(err);
            res.end(JSON.stringify(false));
        } else {
            res.end(JSON.stringify(rows));
        }
    })
})

// ---- PAGES
app.get('/api/pages/:level', function(req, res) {
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
app.get('/api/professor/sections/:id', function(req, res){
    var id = req.params.id;
    db.all("SELECT * FROM v_professor_section WHERE professor_id = ?", [id], function(err, rows){
        if(err){
            console.log(err);
            res.end(JSON.stringify(false));
        }else{
            res.end(JSON.stringify(rows));
        }
    })
})

// ---- ROOMS
app.get('/api/building/:id/rooms', function(req, res) {
    var id = req.params.id;
    db.all("SELECT * FROM room WHERE building_id = ?", [id], function(err, rows) {
        if(err){
            res.end(JSON.stringify(false));
        }else{
            res.end(JSON.stringify(rows));
        }
    });
});

// ---- USERS
app.get('/api/user/:id', function(req, res) {
    var id = req.params.id;
    db.get("SELECT * FROM user WHERE id = ?", [id], function(err, rows) {
        if(err){
            console.log(err);
        }else{
            res.end(JSON.stringify(rows));
        }
    });
});

app.get('/api/login/:username/:password', function(req, res) {
    // Yes I know this is bad but it's just a demo
    const {username, password} = req.params;
    db.get("SELECT * FROM user WHERE username = ? AND password = ?", [username, password], function(err, rows) {
        if (err) {
            console.log(err);
            res.end(JSON.stringify(false));
        } else {
            if (!rows || rows.length < 1) {
                res.end(JSON.stringify(false));
            } else {
                res.end(JSON.stringify(rows));
            }
        }
    });
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(5021 || process.env.PORT, function(){
    console.log('ACTIVE');
});