const Joi = require('joi');

module.exports = Joi.object({
    "post code": Joi.string().required(),
    country: Joi.string().valid("United States").required(),
    "country abbreviation": Joi.string().valid("US").required(),
    places: Joi.array().items(Joi.object({
        "place name": Joi.string().required(),
        longitude: Joi.string().required(),
        state: Joi.string().required(),
        "state abbrevation": Joi.string().required(),
        latitude: Joi.string().required(),
    })).required(),
});