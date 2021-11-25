var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
var path = require('path');
const redis = require('redis');

global.client = redis.createClient();
const util = require('util');
client.get = util.promisify(client.get);

const port = 3010;

const username = "root";
const password = "root";

const databaseUrl = `mongodb+srv://${username}:${password}@clusterulsa.k0ok2.mongodb.net/tercerP?retryWrites=true&w=majority`;
const databaseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}


mongoose.connect(databaseUrl, databaseOptions);
mongoose.connection.on("error", console.error.bind(console, "connection error: "));
mongoose.connection.once("open", function () {
  console.log("Connected successfully");
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB!!!')
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var auth = require('./routes/login');
var prueba = require('./routes/prueba');
var citas = require('./routes/citas');
var servicios = require('./routes/servicios');

var app = express();

// view engine setup
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', auth);
app.use('/citas', citas);
app.use('/servicios', servicios);
app.use('/prueba', prueba);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;