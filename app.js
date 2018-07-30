/**
* Module dependencies.
*/
var express = require('express')
  , routes = require('./routes')
  , api = require('./routes/api')
  , user = require('./routes/user')
  , http = require('http').Server(app)
  , path = require('path');
//var methodOverride = require('method-override');
var session = require('express-session');


var app = express();
var mysql      = require('mysql');
var bodyParser=require("body-parser");
var connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : '',
              database : 'followapp'
            });
 
connection.connect();
 
global.db = connection;


//socket.io
var server = app.listen(3000);
var io = require('socket.io').listen(server);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
              secret: 'keyboard cat',
              resave: false,
              saveUninitialized: true
              //cookie: { maxAge: 6000000 }
            }))
 
// development only
 
app.get('/', routes.index);//call for main index page
app.get('/signup', user.signup);//call for signup page
app.post('/signup', user.signup);//call for signup post 
app.get('/login', routes.index);//call for login page
app.post('/login', user.login);//call for login post
app.get('/home/header', user.findUser, user.findVictims,  user.renderManagerPage, user.delete_victim);//call for dashboard page after login
app.get('/home/dashboard', user.findUser, user.findVictims,  user.renderManagerPage, user.delete_victim);//call for dashboard page after login
app.get('/home/logout', user.logout);//call for logout
app.get('/home/profile',user.findUser,  user.renderProfileUser);//to render users profile
// Add, Edit, Delete Victim
app.get('/dashboard/delete/:id', user.delete_victim);

//Socket.io
app.get('/api', api.index);//call for main index page
app.post('/api', api.apiApp);

app.post('/api', function(req, res){
    res.sendFile(__dirname + '/api');
});


io.on('connection', function(client) {
    var people = client;
    client.on('user connect', function(data) {

        console.log(data + ' connected...');
    });

    client.on('disconnect', function(){
        console.log('disconnected');
    });

});

io.on('connection', function(socket){
    socket.on('chat message', function(msg,people){
        console.log(people + ': ' + msg);
    });
});


