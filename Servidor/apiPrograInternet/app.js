var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const http = require('http');

const username = "root";
const password = "root";

const databaseUrl = `mongodb+srv://${username}:${password}@clusterulsa.k0ok2.mongodb.net/task?retryWrites=true&w=majority`;
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
var operationsRouter = require('./routes/operations');
var pokemonRouter = require('./routes/pokemon');
var taskRouter = require('./routes/task');
var authRouter = require('./routes/auth');
var prueba = require('./routes/prueba');

var app = express();

//Scoket io configuration 
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => { 
  console.log('a user connected'); 
  console.log(socket); 
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/operaciones', operationsRouter);
app.use('/pokemons', pokemonRouter);
app.use('/task', taskRouter);
app.use('/auth', authRouter);
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
