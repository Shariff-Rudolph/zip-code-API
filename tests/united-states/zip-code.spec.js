const schema = require('../schemas/country-zip-code');

describe('api.zippopotam.us/{country-abbreviation}/{zip-code}', function () {
  it('Tests country abbreviation and zip code', function () {
    cy.request({
      url: 'api.zippopotam.us/us/90210',
      method: 'GET',
    }).then((response) => {
      const { error } = schema.validate(response.body);
      expect(error).to.be.undefined;
      expect(response.body).to.have.property('post code').to.contain(90210);
      expect(response.body.country).to.equal('United States');
      expect(response.body).to.have.property('country abbreviation').to.equal('US');
      expect(response.body.places[0].state).to.equal('California');
      expect(response.body.places[0]).to.have.property('place name').to.equal('Beverly Hills');
      expect(response.body.places[0].longitude).to.contain(-118.4065);
      expect(response.body.places[0]).to.have.property('state abbreviation').to.equal('CA');
    });
  });
});
