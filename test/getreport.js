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
    */

  // Getting data with mentioning correct reportID
  describe('/GET report with reportID', () => {
    it('it should GET the desired report', (done) => {
      chai.request(server)
        .get('/reports?reportID=629af20a59bda2d453faf7cc')
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
  describe('/GET report with reportID', () => {
    it('it should not GET any report', (done) => {
      chai.request(server)
        .get('/reports?reprtID=<ID_OF_A_CREATED_REPORT>')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.be.eql("No reportID found")
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