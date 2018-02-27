const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const users = require('./routes/users')

const port = 3000;

app.get('/', (req,res) =>{
  res.sendFile(__dirname + "/index.html")
});

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'routes/assets')));
app.use(express.static(path.join(__dirname, 'routes/assets')));

app.use('/routes', users);

app.listen(port, () => {
  console.log('server started on port '+port);
});
