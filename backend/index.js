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

// Import Admin routes
var AdminRouter = require('./routes/AdminRouter');

// Import Driver routes
var DriverRouter = require('./routes/DriverRouter');


// Import salary routes
var salaryRouter = require('./routes/salaryRouter');  

// Import customer routes
var CustomerRouter = require('./routes/CustomerRouter');  

// Import feedback routes
var FeedbackRouter = require('./routes/FeedbackRouter');  

// Import car routes
var CarRouter = require('./routes/CarRouter'); 

// Import shift routes
var ShiftsRouter = require('./routes/ShiftsRouter');

// Import salary routes
var requestAdminRouter = require('./routes/requestByAdminRouter');  

// Import salary routes
var requestCustomerRouter = require('./routes/requestByCustomerRouter');  


// Using the index routes
app.use('/', indexRouter);

// Using the Authentication routes
app.use('/authentication', authRouter);

// Using the Admin routes
app.use('/Admin', AdminRouter);

// Using the Driver routes
app.use('/Driver', DriverRouter);


// Using the salary routes
app.use('/salary', salaryRouter);


// Using the customer routes
app.use('/Customer', CustomerRouter);

// Using the feedback routes
app.use('/Feedback', FeedbackRouter);
// Using the car routes
app.use('/car', CarRouter);

// Using the shifts routes
app.use('/shift',ShiftsRouter);

// Using the salary routes
app.use('/request/admin', requestAdminRouter);

// Using the salary routes
app.use('/request/customer', requestCustomerRouter);