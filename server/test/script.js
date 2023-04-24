var assert = require('assert')
const app = require('../server')
const chai = require('chai')
const chaiHttp = require('chai-http')

const should = chai.should()

chai.use(chaiHttp)

describe('testing', () => {
    it('posts should be fetched', () =>{
        chai.request(app)
        .get('/posts')
        .end((err, res) => {
            assert.equal(res.status, 200)
            res.body.length.should.be.greaterThan(0)
        })
    })
    it('auction items should be fetched', () => {
        chai.request(app)
        .get('/auctionItems')
        .end((err, res) => {
            assert.equal(res.status, 200)
            res.body.length.should.be.greaterThan(0)
        })
    })
})