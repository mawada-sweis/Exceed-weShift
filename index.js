// Get necessery Models
const { request, response } = require('express');
const express = require('express');
const app = express();
var cors = require('cors')
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var corsOptions = {
    origin: 'http://localhost:4200'
  }
  app.use(cors({
    origin: '*',
    credentials: true
  }));//call db module from db.js file

  const db = require('./models/db');

  app.listen(3000,()=>{
    console.log('start')
});
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

 //-----End Mawada Api's

 //.....Start Ahed.............................................................................

 // get all accounts
app.get('/accounts', async (request, response) => {
    let [result, rows] = await db.connection.execute("SELECT * FROM accounts")
    response.status(200).json(result)
})
 //get all customer 
 app.get('/customer', async (request, response) => {
    let [result, rows] = await db.connection.execute("SELECT * FROM customer")
    response.status(200).json(result)
})
 // get account where first name 
 app.get('/accounts/:FirstName',async(request,response)=>{
    var account_FirstName = request.params.FirstName
    let sql="SELECT * FROM accounts WHERE FirstName=?";
    let result1=await db.connection.execute(sql,[account_FirstName]);
 
   response.status(200).json(result1);
 
 });
//get customer where customerEmail
app.get('/customer/:customerEmail',async(request,response)=>{
    var customer_customerEmail = request.params.customerEmail
    let sql="SELECT * FROM customer WHERE customerEmail=?";
    let result1=await db.connection.execute(sql,[account_FirstName]);
 
   response.status(200).json(result1);
});
// post (add) new customer  
app.post('/customer', async (request, response) => {
        let [result, rows] = await db.connection.execute("insert into customer (customerEmail,accountEmail,RequestNum ) values (?,?,?)", [request.body.customerEmail, request.body.accountEmail,request.body.RequestNum])
        response.status(201).json(result);
    
    });
// post (add) new accounts 
app.post('/accounts', async (request, response) => {
    let [result, rows] = await db.connection.execute("insert into accounts (AccountEmail,FirstName,LastName,City,Situation) values (?,?,?,?,?)", [request.body.AccountEmail, request.body.FirstName,request.body.LastName,request.body.City,request.body.Situation])
    response.status(201).json(result);
    });

 // delete accounts where Account Email
 app.delete('/accounts/:AccountEmail',async(request,response)=>{
    var accounts_AccountEmail = request.params.AccountEmail
    let sql="DELETE FROM accounts WHERE AccountEmail=?";
    let result1=await db.connection.execute(sql,[accounts_AccountEmail]);
 
   response.status(200).json("row deleted");
 
 });
// delete customer where customer Email
app.delete('/customer/:customerEmail',async(request,response)=>{
    var customer_customerEmail = request.params.customerEmail
    let sql="DELETE FROM customer WHERE customerEmail=?";
    let result1=await db.connection.execute(sql,[customer_customerEmail]);
 
   response.status(200).json("row deleted");
 
 });

 // delete driverinfo where Driver Email
 app.delete('/driverinfo/:DriverEmail',async(request,response)=>{
    var driverinfo_DriverEmail = request.params.DriverEmail
    let sql="DELETE FROM driverinfo WHERE DriverEmail=?";
    let result1=await db.connection.execute(sql,[driverinfo_DriverEmail]);
 
   response.status(200).json("row deleted");
 
 });

  //Update account "City" where Account Email
  app.put('/accounts',async(request,response)=>{
    let sql="UPDATE accounts SET City=? WHERE AccountEmail=?"
    let result1=await db.connection.execute(sql,[request.body.City,request.body.AccountEmail]);
    response.status(200).json("row edited");
    });

 //Update customer "RequestNum" where customer Email
 app.put('/customer',async(request,response)=>{
    let sql="UPDATE customer SET RequestNum=? WHERE customerEmail=?"
    let result1=await db.connection.execute(sql,[request.body.RequestNum,request.body.customerEmail]);
    response.status(200).json("row edited");
    });

  //Update driverinfo "License" where DriverEmail
  app.put('/driverinfo',async(request,response)=>{
    let sql="UPDATE driverinfo SET License=? WHERE DriverEmail=?"
    let result1=await db.connection.execute(sql,[request.body.License,request.body.DriverEmail]);
    response.status(200).json("row edited");
    });
    //-----End Ahed Api's

    //.....Start Yara.............................................................................

    

    //-----End Yara Api's

    //.....Start Farah.............................................................................
 // get all accounts
 app.get('/request', async (request, response) => {
  let [result, rows] = await db.connection.execute("SELECT * FROM request")
  response.status(200).json(result)
})


    //-----End Farah Api's

    //.....Start Zubaida.............................................................................



    //-----End Zubaida Api's
    