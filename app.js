const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);


const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('flash-express');
const port = 8080;

mongoose.connect('mongodb://localhost:27017/project01');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'super secret',
    resave: false,
    saveUninitialized: true
  }));
app.use(flash());

app.get('/',(req, res) => {
    res.render('login');
});


app.use('/login', require('./routes/login'));


http.listen(port, function() {
    console.log(port+' at '+new Date());
});
