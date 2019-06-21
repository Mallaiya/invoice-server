const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000

app.use(bodyParser.json({limit: '5mb'}));
// app.use(express.limit(100000000));
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended : true
    })
);

app.use(function (req, res, next){
    res.header('Allow-Control-Allow-Origin',"*");
    res.header('Allow-Control-Allow-Methods',"GET,PUT,POST,DELETE");
    res.header('Allow-Control-Allow-Origin',"Content-Type");
    next();
});
const mongoURI = "mongodb://localhost:27017/invoicedb";

mongoose
    .connect(mongoURI, {useNewUrlParser : true})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

    const Users = require('./routes/Users');

    app.use('/users', Users)



    app.listen(port, () => {
        console.log("Server running on the port : " + port)
    })