const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
router.get("/",(req,res)=>{
    res.status(200).json({message:"The server is up and runniging"});
});
router.post("/reports",reportController.createReport);
router.get("/reports",reportController.getreports);
module.exports = router;