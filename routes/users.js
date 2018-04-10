const express = require('express');
const router = express.Router();
var path = require('path');
const Users = require('../models/usersModel');
var session = require('express-session');
var sess;


router.get('/register',(req,res,next) => {
  res.send('<h1> <center>Congratulations '+req.param('firstName')+'! You have successfully Registered! Team RATS are cooking something special for you! Stay Tuned!</center></h1><center><body><form method="get" action="/"><input type="submit" value="Go Back to Home Page"></form></body></center>');
});

router.get('/login',(req,res,next) => {
  res.send('<h1> <center>Congratulations '+req.param('firstName')+'! You have successfully Logged In! Team RATS are cooking something special for you! Stay Tuned!</center></h1><center><body><form method="get" action="/"><input type="submit" value="Go Back to Home Page"></form></body></center>');
});

router.get('/createUser', (req, res, next) => {
    console.log('Trying to register!');
    sess=req.session;

    const users = new Users({
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        Email: req.query.Email,
        password: req.query.password,
        isAdmin: 'false'
    });

    users.save();
    req.session['username'] = req.param('username');
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));

});


router.get('/loginpage', (req, res, next) =>{

    sess = req.session;
    console.log(sess.username);
    Users.findOne({ 'Email': req.param('username') }, function (err, user) {
        if (err) return handleError(err);
        if(user==null){
            res.sendFile(path.join(__dirname, '../', 'index.html'));
        }
        else {
            // console.log(user.firstName);
            if(user.isAdmin=='true' || user.isAdmin==true){
                res.sendFile(path.join(__dirname, '../', 'views', 'admin.html'));
            }
            else {
                res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
            }
        }
    });

});


router.get('/editProfile', (req, res, next) =>{
  sess = req.session;
  console.log(sess.username);
  Users.findOne({ 'Email': sess.username }, function (err, user) {
    console.log(user);
    if(user!=null) {
        res.render('editProfile', {users: user});
    }
  });

});

router.get('/update', (req, res, next) =>{
  sess = req.session;
  console.log(sess.username);
  Users.findOneAndUpdate({ 'Email': sess.username }, { $set: { firstName: req.param('firstname'), lastName: req.param('lastname') , Email: req.param('email')}}, function (err, user) {
    console.log(user);
    if(user!=null) {
      Users.findOne({ 'Email': sess.username }, function (err, user) {
        console.log(user);
        if(user!=null) {
            res.render('editProfile', {users: user});
        }
      });
    }
  });

});


router.get('/admin_listusers',(req,res,next) => {
    console.log("Admin clicked on view users");

    Users.find({  }, {}, function (err, user) {
        console.log(user);
        if(user!=null) {
            res.render('admin_listusers', {users: user});
        }
    });
});
// router.get('/loginpage',(req,res,next) => {
// //  res.sendFile('login.html', {root: __dirname + '\\views'});
//   console.log(path.join(__dirname, '../', 'views', 'login.html'));
//   res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));

// });

router.get('/Dashboard',(req,res,next) => {
  console.log("Dashboard");
  sess = req.session;
  console.log(sess.username);
  res.sendFile(path.join(__dirname, '../', 'views', 'article.html'));

});

router.get('/recent',(req,res,next) => {
  console.log("recent");
  sess = req.session;
  console.log(sess.username);
  res.sendFile(path.join(__dirname, '../', 'views', 'recent.html'));

});

router.get('/rising',(req,res,next) => {
  console.log("rising");
  res.sendFile(path.join(__dirname, '../', 'views', 'rising.html'));

});

router.get('/courses',(req,res,next) => {
  console.log("courses");
  sess = req.session;
  console.log(sess.username);
  res.sendFile(path.join(__dirname, '../', 'views', 'courses.html'));

});

router.get('/registerpage',(req,res,next) => {
//  res.sendFile('login.html', {root: __dirname + '\\views'});
  res.sendFile(path.join(__dirname, '../', 'views', 'CreateProfile.html'));

});

router.get('/editProfile1',(req,res,next) => {
//  res.sendFile('login.html', {root: __dirname + '\\views'});
  sess = req.session;
  console.log('editProfile:'+sess.username);
  res.sendFile(path.join(__dirname, '../', 'views', 'editProfile.html'));

});

module.exports = router;
