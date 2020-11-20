const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const cors = require('cors');

const Building = require('./server/api/building');
const Class = require('./server/api/class');
const Major = require('./server/api/major');
const Page = require('./server/api/page');
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
app.use(Page);
app.use(Room);
app.use(Section);
app.use(User);

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(5021 || process.env.PORT, function(){
    console.log('ACTIVE');
});