//========================================================================================================================
// Dependencies
//========================================================================================================================

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
const PORT = process.env.PORT || 1990;

//========================================================================================================================
// Middleware
//========================================================================================================================

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


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

app.post('/contact', (req, res)=> {
  let mailOpts, smtpTrans;

  let user_name = req.body.user_name;
  let user_email = req.body.user_email;
  let user_phone = req.body.user_phone;
  let user_message = req.body.user_message;

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: '',
      pass: ''
    }
  });

  let message = {
    from: user_name + " &lt; " + user_email + "&gt;",
    to: 'josh@joshcoles.com',
    subject: "Master Exteriors Contact Form",
    text: user_message,
  }
  transporter.sendMail(message);
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

