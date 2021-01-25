const Drink = require('../../models/drink');
const Brand = require('../../models/brand');

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
  res.json(item);
}

async function create(req, res) {
  console.log(req.body)
  const drink = await Drink.create(req.body);
  res.status(201).json(drink);
}