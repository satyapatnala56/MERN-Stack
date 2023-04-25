var assert = require("assert");
const app = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { beforeEach } = require("mocha");
const mongoConnect = require("../utils/database").mongoConnect;

const should = chai.should();

chai.use(chaiHttp);

describe("testing", () => {
  before((done) => {
    mongoConnect(() => {
      done();
    });
  });

  it("posts should be fetched", (done) => {
    chai
      .request(app)
      .get("/posts")
      .end((err, res) => {
        assert.equal(res.status, 200);
        res.body.length.should.be.greaterThan(0);
        done();
      });
  }).timeout(4000);
  it("auction items should be fetched", (done) => {
    chai
      .request(app)
      .get("/auctionItems")
      .end((err, res) => {
        assert.equal(res.status, 200);
        res.body.length.should.be.greaterThan(0);
        done();
      });
  }).timeout(4000);
  it("should successsfully fetch a file", (done) => {
    chai
      .request(app)
      .get("/post/" + "cat.png3718")
      .end((err, res) => {
        assert.equal(res.status, 200);
        done();
      });
  }).timeout(4000);
});
