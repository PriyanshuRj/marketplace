let mongoose = require("mongoose");

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
chai.use(chaiHttp);
//Our parent block
describe('Reports', () => {

   /*
    * Test the /GET route
    * Contains 5 Tests
    */

  // Getting data with mentioning correct reportID
  describe('/GET report with reportID', () => {
    it('it should GET the desired report', (done) => {
      chai.request(server)
        .get('/reports?reportID=<ID_OF_A_CREATED_REPORT>')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  // Getting data with incorrect reportID
  describe('/GET report with incorrect reportID', () => {
    it('it should not GET any report', (done) => {
      chai.request(server)
        .get('/reports?reportID=629a352b13741f2b2a27deff')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql("No report with this ID found")
          done();
        });
    });
  });

  // Getting data with incorrect format of query
  describe('/GET report with wrong format of reportID', () => {
    it('it should not GET any report', (done) => {
      chai.request(server)
        .get('/reports?reprtID=629af56b6d0664645c0e6960')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql("No reportID found")
          done();
        });
    });
  });
    // Getting data with incorrect format of OF reportID (using unsupported charectors or not equal to orignal length of a reportID)
    describe('/GET report with wrong format of reportID', () => {
      it('it should not GET any report', (done) => {
        chai.request(server)
          .get('/reports?reportID=629a<>56b6d0664645c0e69')
          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.message.should.be.eql("Error fetching reports");
            done();
          });
      });
    });

  // Getting the data without mentioning the reportID
  describe('/GET report without reportID', () => {
    it('it should GET no report', (done) => {
      chai.request(server)
        .get('/reports')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql("No reportID found");
          done();
        });
    });
  });

});