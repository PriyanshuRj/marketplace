const { MongoServerError } = require('mongodb');
const db_path = process.env.DB_PATH;
const mongoose = require('mongoose');
mongoose.connect(db_path);
const db = mongoose.connection;                                               // Mongoose connection to mongodb

db.on('error', console.error.bind(console, "Error connectiong to mongodb"));  // Error handling for the connection to mongodb

db.once('open', function () {                                                 // Open the connection
    console.log('Connected to mongodb');
})

module.exports = db;                                                          // Exporting the connection to mongodb