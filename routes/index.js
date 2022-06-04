const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Testing API for testing if the backend is runnung(warmup API)
router.get("/", (req, res) => {
    res.status(200).json({ message: "The server is up and runniging" });
});

// Post API for creating the Report of a market
/*
    parameters to send in body:
        userID: {type:String}
        marketID: {type:String}
        marketName: {type:String}
        cmdtyID: {type:String}
        marketType: {type:String}
        cmdtyName: {type:String}
        priceUnit: {type:String}
        convFctr: {type:Number}
        price: {type:Number}
*/
router.post("/reports", reportController.createReport);

// GET API for reciving the report of a market requires Query parameter reportID
router.get("/reports", reportController.getreports);
module.exports = router;