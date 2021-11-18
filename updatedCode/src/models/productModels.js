const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productDataSchema = new Schema({
  product_name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: false,
  },
});

const Product = mongoose.model("productData", productDataSchema);
module.exports = Product;
