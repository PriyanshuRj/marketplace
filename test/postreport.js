//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');

chai.use(chaiHttp);
//Our parent block
describe('Reports', () => {

    /*
      * Test the /POST route
      */

    //  Posting with all the required data
    describe('/POST report with all the data', () => {
        it('it should POST the given report', (done) => {
            let report = {
                "reportDetails": {
                    "userID": "user-1",
                    "marketID": "market-1",
                    "marketName": "Vashi Navi Mumbai",

                    "cmdtyID": "cmdty-1",
                    "marketType": "Mandi",
                    "cmdtyName": "Potato",
                    "priceUnit": "Pack",
                    "convFctr": 50,
                    "price": 700
                }
            }
            chai.request(server)
                .post('/reports').send(report)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.status.should.be.eql("success");

                    done();
                });
        });
    });

    //  Posting with  with one data field missing
    describe('/POST report with one data field missing', () => {
        it('it should not POST the given report', (done) => {
            let report = {
                "reportDetails": {
                    "userID": "user-1",
                    "marketID": "market-1",
                    "cmdtyID": "cmdty-1",
                    "marketType": "Mandi",
                    "cmdtyName": "Potato",
                    "priceUnit": "Pack",
                    "convFctr": 50,
                    "price": 700
                }
            }
            chai.request(server)
                .post('/reports').send(report)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.message.should.be.eql("Insufficient Data send !! please provide all the require fields");
                    done();
                });
        });
    });

    //  Posting with  with two data field missing
    describe('/POST report with two data field missing', () => {
        it('it should not POST the given report', (done) => {
            let report = {
                "reportDetails": {
                    "userID": "user-1",
                    "marketID": "market-1",
                    "cmdtyID": "cmdty-1",
                    "marketType": "Mandi",
                    "cmdtyName": "Potato",
                    "priceUnit": "Pack",
                }
            }
            chai.request(server)
                .post('/reports').send(report)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.message.should.be.eql("Insufficient Data send !! please provide all the require fields");
                    done();
                });
        });
    });

    //  Posting with  with data missing
    describe('/POST report with data missing', () => {
        it('it should not POST the given report', (done) => {
            let report = {
                "reportDetails": {}
            }
            chai.request(server)
                .post('/reports').send(report)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.message.should.be.eql("Insufficient Data send !! please provide all the require fields");
                    done();
                });
        });
    });

     //  Posting with  with data missing
    describe('/POST report with data missing', () => {
        it('it should not POST the given report', (done) => {
            let report = {}
            chai.request(server)
                .post('/reports').send(report)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.message.should.be.eql("Insufficient Data send !! please provide all the require fields");
                    done();
                });
        });
    });

});