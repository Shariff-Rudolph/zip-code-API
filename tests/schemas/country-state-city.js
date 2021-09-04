const Joi = require('joi');

module.exports = Joi.object({
    country: Joi.string().valid("United States").required(),
    "country abbreviation": Joi.string().valid("US").required(),
    "place name": Joi.string().required(),
    state: Joi.string().required(),
    "state abbreviation": Joi.string().required(),
    places: Joi.array().items(Joi.object({
        "place name": Joi.string().required(),
        longitude: Joi.string().required(),
        "post code": Joi.string().required(),
        latitude: Joi.string().required(),
    })).required(),
});