// Main file

// Get necessery Models
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

// Set the port
app.set('port', process.env.PORT || 3030);
app.listen(app.get('port'));
console.log(`App listening on port ${app.get('port')}!`);
console.log(`Visit localhost:${app.get('port')}`);

// Import Index routes.
var indexRouter = require('./routes/index');

// Import Authentication routes
var authRouter = require('./routes/authRouter');  

// Using the index routes
app.use('/', indexRouter);

// Using the Authentication routes
app.use('/authentication', authRouter);
