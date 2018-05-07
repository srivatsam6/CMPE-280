const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const users = require('./routes/users')

const port = 3000;

var session = require('express-session');

app.get('/', (req,res) =>{


        res.sendFile(__dirname + "/index.html")

});

app.use(session({secret: '#1265872829-89ba;klvhjefhir'}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//app.use(express.static(path.join(__dirname, 'routes/assets')));
app.use(express.static(path.join(__dirname, 'routes/assets')));

app.use('/routes', users);

//View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.listen(port, () => {
  console.log('server started on port '+port);
});


const dbConfig = require('./config/database.config.js');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
    .then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});