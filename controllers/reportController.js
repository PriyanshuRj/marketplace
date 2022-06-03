const Report = require('../models/report');

module.exports.createReport = async (req, res) => {

    const reportDetails = req.body.reportDetails;

    if (reportDetails && reportDetails.userID && reportDetails.marketID && reportDetails.marketName && reportDetails.cmdtyID && reportDetails.marketType && reportDetails.cmdtyName && reportDetails.priceUnit && reportDetails.convFctr && reportDetails.price) {

        const price = (reportDetails.price) / (reportDetails.convFctr);

        const newReport = await Report({
            userID: reportDetails.userID,
            marketID: reportDetails.marketID,
            marketName: reportDetails.marketName,
            cmdtyID: reportDetails.cmdtyID,
            marketType: reportDetails.marketType,
            cmdtyName: reportDetails.cmdtyName,
            price: price,
        });
        const savedReport = await newReport.save();
        res.status(200).json({
            status: "success",
            reportID: savedReport._id
        });
    }
    else {
        res.status(400).json({ message: "Insufficient Data send !! please provide all the require fields" })
    }
}
module.exports.getreports = (req, res) => {
    const id = req.query.reportID;
    if (id) {
        Report.findOne({ _id: id }, (err, reports) => {
            if (err) {
                res.status(400).json({ message: "Error fetching reports" });
            }
            else {
                res.status(200).json({ reports });
            }
        })
    }
    else {
        res.status(404).json({message:"No reportID found"});
    }

}

