const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const cors = require('cors');

const Building = require('./server/api/building');
const Class = require('./server/api/class');
const Major = require('./server/api/major');
const Pages = require('./server/api/pages');
const Room = require('./server/api/room');
const Section = require('./server/api/section');
const User = require('./server/api/user');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.use(Building);
app.use(Class);
app.use(Major);
app.use(Pages);
app.use(Room);
app.use(Section);
app.use(User);

var db = new sqlite3.Database('server/db/campus-react.db');

app.get('/ping', function (req, res) {
 return res.send('pong');
});


// SECTIONS




// // FLOWCHART
// app.get('/api/flowchart/:id', function(req, res){
//     var id = req.params.id;
//     db.all("SELECT * FROM class_dependency WHERE major_id = ?", [id], function(err,rows){
//         if(err){
//             console.log(err);
//             res.end(JSON.stringify(false));
//         }else{
//             db.all("SELECT * FROM major_dependency WHERE major_id = ?", [id], function(err,rows2){
//                 if(err){
//                     console.log(err);
//                     res.end(JSON.stringify(false));
//                 }else{
//                     // need to merge the two together
//                     res.end(JSON.stringify(rows.concat(rows2)));
//                 }
//             })
//         }
//     })
// })

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