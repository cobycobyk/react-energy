const mongoose = require('mongoose');
require('./brand');
const drinkSchema = require('./drinkSchema');

module.exports = mongoose.model('Drink', drinkSchema)