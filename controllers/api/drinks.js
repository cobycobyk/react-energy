const Drink = require('../../models/drink');

module.exports = {
  index,
  show,
  create,
};

async function index(req, res) {
  const drinks = await Drink.find({}).sort('name')
    .populate('brand')
    .exec();
  res.json(drinks);
}

async function show(req, res) {
  const item = await Drink.findById(req.params.id)
  console.log('drink', item)
  res.json(item);
}

async function create(req, res) {
  const drink = await Drink.create(req.body);
  res.status(201).json(drink);
}