// process.env.NODE_ENV = "test";

const { User } = require("../models/");

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../");
const should = chai.should();

chai.use(chaiHttp);

describe("Users", () => {
  beforeEach(done => {
    /* make sure DB is empty */
    let deleteUsers = User.destroy({ force: true, truncate: true });
    done();
  });

  describe("/GET users", () => {
    it("it should GET all of users data", done => {
      chai
        .request(server)
        .get("/api/v1/users")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
