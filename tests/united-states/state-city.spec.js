const schema = require('../schemas/country-state-city');

describe('api.zippopotam.us/{country abbreviation}/{state}/{city}', function () {
  it('Tests country abbreviation, state, and city', function () {
    cy.request({
      url: 'api.zippopotam.us/us/ma/boston',
      method: 'GET',
    }).then((response) => {
      const { error } = schema.validate(response.body);
      const city = response.body.places;
      expect(error).to.be.undefined;
      expect(response.body.country).to.equal('United States');
      expect(response.body.state).to.equal('Massachusetts');
      expect(response.body.country).to.equal('United States');
      expect(response.body).to.have.property('place name').to.equal('Boston');
      expect(response.body).to.have.property('country abbreviation').to.equal('US');
      expect(response.body).to.have.property('state abbreviation').to.equal('MA');
      city.forEach((item) => {
        expect(item['place name']).to.contain('Boston', 'East Boston');
        expect(item['post code']).to.match(/02[^0 - 9]+/);
        expect(Number(item['longitude'])).to.be.within(-72, -69);
        expect(Number(item['latitude'])).to.be.within(41, 43);
      });
    });
  });
});
