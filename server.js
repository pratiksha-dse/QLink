var express = require('express');
var app = express();
const path=require("path");
// set the view engine to ejs
app.set('view engine', 'ejs');
const publicdirectory = path.join(__dirname,'./public')
app.use(express.static(publicdirectory));
app.use(express.urlencoded({extented:true}));
app.use(express.json());


app.get('/home', function (req, res) {
  res.render('index');
});

app.get('/', function (req, res) {
  res.render('login');
});

app.get('/profile/post', function (req, res) {
  res.render('post');
});



app.get('/profile', function (req, res) {
  res.render('profile');
});

app.listen(3020);
console.log('Server is listening on port 3020');
