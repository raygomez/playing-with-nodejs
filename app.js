var express = require('express')
var app = express();
var port = process.env.PORT || 8080;

var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
//var mongoose = require('mongoose');

//var configDB = require('./config/database.js');
//mongoose.connect(configDB.url);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({secret: 'anystring',
				 saveUninitialized: true,
				 resave: true }));


require('./app/routes.js')(app);

app.use('/', function (req, res){
	res.send('Our First Express program.');
	console.log(req.cookies);
	console.log('==============');
	console.log(req.session);
});

app.listen(port);
console.log('Server listening on port:', port);