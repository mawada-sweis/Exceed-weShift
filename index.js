// Main file

// Get necessery Models
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use('/public', express.static('public'))

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

// Entry endpoint
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/view/index.html');
});

// Import Index routes.
var indexRouter = require('./routes/index');

// Using the index routes
app.use('/', indexRouter);
