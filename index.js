require("dotenv").config();
const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;
const db = require('./config/mongoose');
const router = require('./routes/index');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/", router);  // Using router for all the incoming HTTP requests

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Server listening at port", port);
    }
})
module.exports = app;   // Exporting the app component so that it can be used in the tests