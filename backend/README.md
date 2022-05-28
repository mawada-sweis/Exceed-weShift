# Backend

This project was generated with [Node js]() version 13.2.4 and [Npm Package maneger]().

## Create Project

Run `npm init` to create new Node project. We use index.js for entry point and nodemon for test command.

## Development server

Run `node index.js` for a dev server. Navigate to `http://localhost:3030/`. 

## Test command

Run `nodemon index.js` to automatically reload if you change any of the source files.

To end the testing press Ctrl+C on the keyboard.

## Database 
We defined SQL models to interact with the database. 

## Process Flow
 
### Information we want to be able to display in our pages

### Define appropriate URLs (URL handlers) for returning resources

### Main Flow
The diagram below is provided as a reminder of the main flow of data and things that need to be implemented when handling an HTTP request/response. In addition to the views and routes the diagram shows "controllers" — functions that separate out the code to route requests from the code that actually processes requests.
![Main Flow](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes/mvc_express.png)

* "Routes" to forward the supported requests (and any information encoded in request URLs) to the appropriate controller functions.
* Controller functions to get the requested data from the models, and return response to the user to view in the browser.

## Further help

To get more help on the npm use `npm help`.
