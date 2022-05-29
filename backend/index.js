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

// Import salary routes
var salaryRouter = require('./routes/salaryRouter');  

// Import customer routes
var CustomerRouter = require('./routes/CustomerRouter');  

// Import feedback routes
var FeedbackRouter = require('./routes/FeedbackRouter');  


// Using the index routes
app.use('/', indexRouter);

// Using the Authentication routes
app.use('/authentication', authRouter);

// Using the salary routes
app.use('/salary', salaryRouter);

// Using the customer routes
app.use('/Customer', CustomerRouter);

// Using the feedback routes
app.use('/Feedback', FeedbackRouter);


