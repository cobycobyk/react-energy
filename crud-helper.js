// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Drink = require('./models/drink');
const Brand = require('./models/brand');
// const Order = require('./models/order');
const name =[];
const brands = Brand.find({}).sort('name').then(b => b.forEach(a => name.push(a.name)))


// Local variables will come in handy
let u, i, c, o;