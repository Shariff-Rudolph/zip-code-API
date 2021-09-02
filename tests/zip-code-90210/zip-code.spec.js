const schema = require('../schemas/united-states');

describe('api.zippopotam.us/{country-abbreviation}/{zip-code}', function () {
    it('Tests country abbreviation and zip code', function () {
        cy.request({
            url: 'api.zippopotam.us/us/90210',
            method: 'GET',
        }).then((response) => {
            const { error } = schema.validate(response.body);
            expect(error).to.be.undefined;
            expect(response.body.country).to.equal('United States');
        });
    });
});