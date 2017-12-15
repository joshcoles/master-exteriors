//========================================================================================================================
// Dependencies
//========================================================================================================================

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv');

//========================================================================================================================
// Middleware
//========================================================================================================================

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
dotenv.load();

console.log("I'm running");

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res)=> {
  res.render('about');
})

app.get('/services', (req, res)=> {
  res.render('services');
})

app.get('/contact', (req, res)=> {
  res.render('contact');
})

app.get('/form-submitted', (req, res) => {
  res.render('form-submitted');
})

// 404 handling
app.get('*', function (req, res) {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

