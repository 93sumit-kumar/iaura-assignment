const Product = require("../models/productModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { roles } = require("../roles");

/**
 * @description: Function to add the product
 */
exports.addProduct = async (req, res, next) => {
  try {
    const productName = req.body.productName;
    const price = req.body.price;
    const description = req.body.description;

    const newProduct = new Product({
      product_name: productName,
      price,
      description,
    });
    const saveData = await newProduct.save();
    if (saveData) {
      res.send({
        statusCode: 200,
        message: "Product added successfully!",
        data: saveData,
      });
    } else {
      res.send({
        statusCode: 401,
        message: "Error! Something went wrong!",
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @description: Function to get all the products
 */
exports.getProducts = async (req, res, next) => {
  try {
  } catch (error) {}
};

/**
 * @description: Function to get single product
 */
exports.getProduct = async (req, res, next) => {
  try {
  } catch (error) {}
};

/**
 * @description: Function to update the product
 */
exports.updateProduct = async (req, res, next) => {
  try {
  } catch (error) {}
};

/**
 * @description: Function to delete the product
 */
exports.deleteProduct = async (req, res, next) => {};
