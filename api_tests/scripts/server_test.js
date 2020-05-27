
const request = require("request");
const chai = require('chai');
const expect = chai.expect;
const data = {};

/* --------------------------------------------------
Chai Expect Documentation Link: https://www.chaijs.com/api/bdd/
-------------------------------------------------- */

describe('SERVER TEST', function () {

    it('Get All Movies', function (done) {

        const config = {
            url: 'http://localhost:3000/movies',
            method: 'get'
        };

        request(config, (error, response, body) => {

            const responseBody = JSON.parse(body);
            data.movies_count = responseBody.length;

            expect(response.statusCode).to.equal(200);

            done();
        });

    }, 10000);

    it('Add A New Movie', function (done) {

        const config = {
            url: 'http://localhost:3000/movie',
            method: 'post',
            json: {
                title: 'Titanic',
                director: 'Chris',
                rating: 'R',
                producer: 'Chris',
                revenue: '1B',
                rotten_tomato_rating: '8.8'
            }
        };

        request(config, (error, response, body) => {

            expect(body).to.be.an('object').that.has.all.
                keys('id', 'title', 'director', 'rating', 'producer', 'revenue', 'rotten_tomato_rating');

            expect(body.title).to.equal(config.json.title);
            expect(body.director).to.equal(config.json.director);
            expect(body.rating).to.equal(config.json.rating);
            expect(body.producer).to.equal(config.json.producer);
            expect(body.revenue).to.equal(config.json.revenue);
            expect(body.rotten_tomato_rating).to.equal(config.json.rotten_tomato_rating);
            expect(response.statusCode).to.equal(200);

            done();
        });

    }, 10000);

    it('Get All Movies', function (done) {

        const config = {
            url: 'http://localhost:3000/movies',
            method: 'get'
        };

        request(config, (error, response, body) => {

            const responseBody = JSON.parse(body);

            expect(data.movies_count + 1).to.equal(responseBody.length);
            expect(response.statusCode).to.equal(200);

            done();
        });

    }, 10000);
});
