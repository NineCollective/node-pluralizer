/**
 * Created by JF05563 on 9/9/2014.
 */
var plz = require('../lib/pluralizer');
var should = require('should');

describe('Pluralizer should ', function () {
    it('pluralize word properly', function (done) {
        'cat'.pluralize().should.equal('cats');
        done()
    });

    it('should return proper for search', function (done) {
        "search".pluralize().should.equal("searches");
        done();
    });
    it('should return proper for switch', function (done) {
        "switch".pluralize().should.equal("switches");
        done();
    });
    it('should return proper for fix', function (done) {
        "fix".pluralize().should.equal("fixes");
        done();
    });
    it('should return proper for box', function (done) {
        "box".pluralize().should.equal("boxes");
        done();
    });
    it('should return proper for process', function (done) {
        "process".pluralize().should.equal("processes");
        done();
    });
    it('should return proper for address', function (done) {
        "address".pluralize().should.equal("addresses");
        done();
    });
    it('should return proper for case', function (done) {
        "case".pluralize().should.equal("cases");
        done();
    });
    it('should return proper for stack', function (done) {
        "stack".pluralize().should.equal("stacks");
        done();
    });
    it('should return proper for wish', function (done) {
        "wish".pluralize().should.equal("wishes");
        done();
    });
    it('should return proper for fish', function (done) {
        "fish".pluralize().should.equal("fish");
        done();
    });

    it('should return proper for category', function (done) {
        "category".pluralize().should.equal("categories");
        done();
    });
    it('should return proper for query', function (done) {
        "query".pluralize().should.equal("queries");
        done();
    });
    it('should return proper for ability', function (done) {
        "ability".pluralize().should.equal("abilities");
        done();
    });
    it('should return proper for agency', function (done) {
        "agency".pluralize().should.equal("agencies");
        done();
    });
    it('should return proper for movie', function (done) {
        "movie".pluralize().should.equal("movies");
        done();
    });

    it('should return proper for archive', function (done) {
        "archive".pluralize().should.equal("archives");
        done();
    });

    it('should return proper for index', function (done) {
        "index".pluralize().should.equal("indices");
        done();
    });

    it('should return proper for wife', function (done) {
        "wife".pluralize().should.equal("wives");
        done();
    });
    it('should return proper for safe', function (done) {
        "safe".pluralize().should.equal("saves");
        done();
    });
    it('should return proper for half', function (done) {
        "half".pluralize().should.equal("halves");
        done();
    });

    it('should return proper for move', function (done) {
        "move".pluralize().should.equal("moves");
        done();
    });

    it('should return proper for salesperson', function (done) {
        "salesperson".pluralize().should.equal("salespeople");
        done();
    });
    it('should return proper for person', function (done) {
        "person".pluralize().should.equal("people");
        done();
    });

    it('should return proper for spokesman', function (done) {
        "spokesman".pluralize().should.equal("spokesmen");
        done();
    });
    it('should return proper for man', function (done) {
        "man".pluralize().should.equal("men");
        done();
    });
    it('should return proper for woman', function (done) {
        "woman".pluralize().should.equal("women");
        done();
    });

    it('should return proper for basis', function (done) {
        "basis".pluralize().should.equal("bases");
        done();
    });
    it('should return proper for diagnosis', function (done) {
        "diagnosis".pluralize().should.equal("diagnoses");
        done();
    });

    it('should return proper for datum', function (done) {
        "datum".pluralize().should.equal("data");
        done();
    });
    it('should return proper for medium', function (done) {
        "medium".pluralize().should.equal("media");
        done();
    });
    it('should return proper for analysis', function (done) {
        "analysis".pluralize().should.equal("analyses");
        done();
    });

    it('should return proper for node_child', function (done) {
        "node_child".pluralize().should.equal("node_children");
        done();
    });
    it('should return proper for child', function (done) {
        "child".pluralize().should.equal("children");
        done();
    });

    it('should return proper for experience', function (done) {
        "experience".pluralize().should.equal("experiences");
        done();
    });
    it('should return proper for day', function (done) {
        "day".pluralize().should.equal("days");
        done();
    });

    it('should return proper for comment', function (done) {
        "comment".pluralize().should.equal("comments");
        done();
    });
    it('should return proper for foobar', function (done) {
        "foobar".pluralize().should.equal("foobars");
        done();
    });
    it('should return proper for newsletter', function (done) {
        "newsletter".pluralize().should.equal("newsletters");
        done();
    });

    it('should return proper for old_news', function (done) {
        "old_news".pluralize().should.equal("old_news");
        done();
    });
    it('should return proper for news', function (done) {
        "news".pluralize().should.equal("news");
        done();
    });

    it('should return proper for series', function (done) {
        "series".pluralize().should.equal("series");
        done();
    });
    it('should return proper for species', function (done) {
        "species".pluralize().should.equal("species");
        done();
    });

    it('should return proper for quiz', function (done) {
        "quiz".pluralize().should.equal("quizzes");
        done();
    });

    it('should return proper for perspective', function (done) {
        "perspective".pluralize().should.equal("perspectives");
        done();
    });


    it('should return proper for ox', function (done) {
        "ox".pluralize().should.equal("oxen");
        done();
    });
    it('should return proper for photo', function (done) {
        "photo".pluralize().should.equal("photos");
        done();
    });
    it('should return proper for buffalo', function (done) {
        "buffalo".pluralize().should.equal("buffaloes");
        done();
    });
    it('should return proper for tomato', function (done) {
        "tomato".pluralize().should.equal("tomatoes");
        done();
    });
    it('should return proper for dwarf', function (done) {
        "dwarf".pluralize().should.equal("dwarves");
        done();
    });
    it('should return proper for elf', function (done) {
        "elf".pluralize().should.equal("elves");
        done();
    });
    it('should return proper for information', function (done) {
        "information".pluralize().should.equal("information");
        done();
    });
    it('should return proper for equipment', function (done) {
        "equipment".pluralize().should.equal("equipment");
        done();
    });
    it('should return proper for bus', function (done) {
        "bus".pluralize().should.equal("buses");
        done();
    });
    it('should return proper for status', function (done) {
        "status".pluralize().should.equal("statuses");
        done();
    });
    it('should return proper for status_code', function (done) {
        "status_code".pluralize().should.equal("status_codes");
        done();
    });
    it('should return proper for mouse', function (done) {
        "mouse".pluralize().should.equal("mice");
        done();
    });

    it('should return proper for louse', function (done) {
        "louse".pluralize().should.equal("lice");
        done();
    });
    it('should return proper for house', function (done) {
        "house".pluralize().should.equal("houses");
        done();
    });
    it('should return proper for octopus', function (done) {
        "octopus".pluralize().should.equal("octopi");
        done();
    });
    it('should return proper for virus', function (done) {
        "virus".pluralize().should.equal("viri");
        done();
    });
    it('should return proper for alias', function (done) {
        "alias".pluralize().should.equal("aliases");
        done();
    });
    it('should return proper for portfolio', function (done) {
        "portfolio".pluralize().should.equal("portfolios");
        done();
    });

    it('should return proper for vertex', function (done) {
        "vertex".pluralize().should.equal("vertices");
        done();
    });
    it('should return proper for matrix', function (done) {
        "matrix".pluralize().should.equal("matrices");
        done();
    });

    it('should return proper for axis', function (done) {
        "axis".pluralize().should.equal("axes");
        done();
    });
    it('should return proper for testis', function (done) {
        "testis".pluralize().should.equal("testes");
        done();
    });
    it('should return proper for crisis', function (done) {
        "crisis".pluralize().should.equal("crises");
        done();
    });

    it('should return proper for rice', function (done) {
        "rice".pluralize().should.equal("rice");
        done();
    });
    it('should return proper for shoe', function (done) {
        "shoe".pluralize().should.equal("shoes");
        done();
    });

    it('should return proper for horse', function (done) {
        "horse".pluralize().should.equal("horses");
        done();
    });
    it('should return proper for prize', function (done) {
        "prize".pluralize().should.equal("prizes");
        done();
    });
    it('should return proper for edge', function (done) {
        "edge".pluralize().should.equal("edges");
        done();
    });

});