const Drink = require('../../models/drink');

module.exports = {
  index,
};

async function index(req, res) {
  const drinks = await Drink.find({}).sort('name')
    .populate('brand')
    .exec();
  res.json(drinks);
}