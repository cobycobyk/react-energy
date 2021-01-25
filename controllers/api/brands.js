const Brand = require('../../models/brand');

module.exports = {
  index,
};

async function index(req, res) {
  const brands = await Brand.find({})
  res.json(brands);
}
