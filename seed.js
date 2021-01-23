require('dotenv').config();
require('./config/database');

const Brand = require('./models/brand');
const Drink = require('./models/drink');

(async function() {

  await Brand.deleteMany({});
  const brands = await Brand.create([
    {name: 'RedBull'},
    {name: 'Rockstar'},
    {name: 'Monster'},
    {name: '5Hr'},
    {name: 'Xyience'},
    {name: 'Redline'},
  ]);

  await Drink.deleteMany({});
  const drinks = await Drink.create([
    {name: "Redbull Original", image: "https://images-na.ssl-images-amazon.com/images/I/717UeFPILnL._AC_SL1500_.jpg", brand: brands[0], price: 3.50},
    {name: "Redbull Sugar Free", image: "https://images-na.ssl-images-amazon.com/images/I/71R5E7UmIyL._AC_SL1500_.jpg", brand: brands[0], price: 2.50},
    {name: "RedBull Zero", image: "https://images-na.ssl-images-amazon.com/images/I/71ffQHpW6aL._SL1500_.jpg", brand: brands[0], price: 2.95},
    {name: "Rockstar Original", image: "https://images-na.ssl-images-amazon.com/images/I/81nrHilpz6L._SL1500_.jpg", brand: brands[1], price: 1.99},
    {name: "Rockstar Sugar Free", image: "https://images-na.ssl-images-amazon.com/images/I/71bB83EkJbL._SL1319_.jpg", brand: brands[1], price: 2.25},
    {name: "Rockstar Zero", image: "https://images-na.ssl-images-amazon.com/images/I/71ffQHpW6aL._SL1500_.jpg", brand: brands[1], price: 1.65},
    {name: "Monster Original", image: "https://images-na.ssl-images-amazon.com/images/I/812EcnH%2BtxL._SL1500_.jpg", brand: brands[2], price: 2.95},
    {name: "Monster Zero", image: "https://images-na.ssl-images-amazon.com/images/I/81Vd4z40HaL._SL1500_.jpg", brand: brands[2], price: 2.25},
    {name: "Monster Lo-Carb", image: "https://images-na.ssl-images-amazon.com/images/I/61ovkU5rU3L._SL1500_.jpg", brand: brands[2], price: 2.50},
    {name: "5Hr Orange", image: "https://images-na.ssl-images-amazon.com/images/I/41Nn4ndtZqL._AC_.jpg", brand: brands[3], price: 1.99},
    {name: "5Hr Berry", image: "https://images-na.ssl-images-amazon.com/images/I/71PbAszrPTL._AC_SL1300_.jpg", brand: brands[3], price: 1.99},
    {name: "5Hr Cherry Extra Strength", image: "https://images-na.ssl-images-amazon.com/images/I/71k%2BGBXoSjL._AC_SL1300_.jpg", brand: brands[3], price: 2.25},
    {name: "5Hr Berry Extra Strength", image: "https://images-na.ssl-images-amazon.com/images/I/51foThpWc-L._SL1000_.jpg", brand: brands[3], price: 2.25},
    {name: "Xyience Wild Grape", image: "https://m.media-amazon.com/images/I/71zj3H9DNhL._AC_UL640_FMwebp_QL65_.jpg", brand: brands[4], price: 2.50},
    {name: "Xyience Mango Guava", image: "https://m.media-amazon.com/images/I/317HTDjTT8L._AC_UL640_FMwebp_QL65_.jpg", brand: brands[4], price: 3.95},
    {name: "Xyience Cherry Lime", image: "https://m.media-amazon.com/images/I/41tdsJraG-L._AC_UL640_FMwebp_QL65_.jpg", brand: brands[4], price: 3.50},
    {name: "Redline Frostberry", image: "https://m.media-amazon.com/images/I/419xxuMbSsL._AC_UL640_FMwebp_QL65_.jpg", brand: brands[4], price: 2.95},
  ])

  console.log(drinks)

  process.exit()

})();