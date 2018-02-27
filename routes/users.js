const express = require('express');
const router = express.Router();
var path = require('path');

router.get('/register',(req,res,next) => {
  res.send('<h1> <center>Congratulations '+req.param('firstName')+'! You have successfully Registered! Team RATS are cooking something special for you! Stay Tuned!</center></h1><center><body><form method="get" action="/"><input type="submit" value="Go Back to Home Page"></form></body></center>');
});

router.get('/login',(req,res,next) => {
  res.send('<h1> <center>Congratulations '+req.param('firstName')+'! You have successfully Logged In! Team RATS are cooking something special for you! Stay Tuned!</center></h1><center><body><form method="get" action="/"><input type="submit" value="Go Back to Home Page"></form></body></center>');
});

router.get('/loginpage',(req,res,next) => {
//  res.sendFile('login.html', {root: __dirname + '\\views'});
  console.log(path.join(__dirname, '../', 'views', 'login.html'));
  res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));

});

router.get('/registerpage',(req,res,next) => {
//  res.sendFile('login.html', {root: __dirname + '\\views'});
  res.sendFile(path.join(__dirname, '../', 'views', 'CreateProfile.html'));

});

module.exports = router;
