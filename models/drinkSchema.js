const Schema = require('mongoose').Schema;

const drinkSchema = new Schema({
  name: { type: String, required: true},
  image: {type: String},
  brand: {
    type: Schema.Types.ObjectId, ref: 'Brand',
  },
  price: {type: Number, default: 0}
}, {
  timestamps: true
});

module.exports = drinkSchema;