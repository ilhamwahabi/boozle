// requirement
require('dotenv').config()
var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var morgan     = require('morgan');
var cors       = require('cors')
var app        = express();

// environment variable
var port = process.env.PORT;
var dbService = process.env.DB_SERVICE;
var dbHost = process.env.DB_HOST;
var dbUser = process.env.DB_USER;
var dbPass = process.env.DB_PASS;

// database connection
var dbUri = `mongodb+srv://${dbUser}:${dbPass}@${dbService}/${dbHost}?retryWrites=true`
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(dbUri);

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// router
var router = express.Router();

// controller
var roomController = require('./controllers/roomController');
var userController = require('./controllers/userController');

// stocks
router.get('/rooms', roomController.getAllRooms);
router.post('/rooms', roomController.addNewRoom);
router.get('/users/:id', userController.getUserDetail);

// start server
app.use(morgan('dev'));
app.use(cors())
app.use('/api', router);
app.listen(port);
console.log('Listen to port :', port);
