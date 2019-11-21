const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

const { expect } = chai;

describe('router:root', () => {
  describe('GET /ping', () => {
    it('should return "pong"', (done) => {
      chai.request(app)
        .get('/ping')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.be.text;
          expect(res.text).to.equal('pong');
          done();
        });
    });
  });
});
