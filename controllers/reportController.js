const Report = require('../models/report');

module.exports.postReport = async (req,res)=>{
    if(req.body.userID && req.body.marketID && req.body.marketName && req.body.cmdtyID && req.body.marketType && req.body.cmdtyName && req.body.priceUnit && req.body.convFctr && req.body.price){
        
        const price = (req.body.price)/(req.body.convFctr);
        
        const newReport = await Report({
            userID:req.body.UserID,
            marketID:req.body.marketID,
            marketName:req.body.marketName,
            cmdtyID:req.body.cmdtyID,
            marketType:req.body.marketType,
            cmdtyName:req.body.UserID,
            price:price,
        })

        const savedReport = newReport.save();
        res.status(200).json({status: "success",
            reportID: savedReport._id});
    }
    else{
        res.status(400).json({message:"Insufficient Data send !! please provide all the require fields"})
    }
}

