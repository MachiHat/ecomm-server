const fs = require("fs");
const dataRef = require("../data/products");
const Product = require("../models/products.api");

const data = fs.promises.readFile(dataRef, "utf-8");

const getAll = async () => {
  try {
    const prods = json.parse(data);
    return prods;
  } catch (err) {
    console.log(`OOPS! There was an error: ${err}`);
  }
};

const getById = async (id) => {
  if (id === undefined || id === null || isNaN(id) === true) {
    return error("Invalid id");
  }
  const prods = json.parse(data);
  const prod = prods.find((prod) => prod.id === +id);
  return prod || { error: `Product with id: ${id} does not exist` };
};

const addProd = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({
      status: 201,
      success: true,
      msg: "Product added and saved!",
      item: newProduct,
    });
    // PREVIOUS METHOD
    // const products = JSON.parse(data);
    // const prodList = [products];
    // const newProdList = [...prodList + newProduct]
    // return (newProdList);
  } catch (err) {
    console.error(`OOPS! There was an error: ${err}`);
    res.status(400).json({
      status: 400,
      success: false,
      msg: err.message,
      item: {},
    });
  }
};

const updateProd = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    const prod = await Product.findById(req.params.id);
    res.status(201).json({
      status: 201,
      success: true,
      msg: "Product updated and saved!",
      item: prod,
    });
  } catch (err) {
    console.error(`OOPS! There was an error: ${err}`);
    res.status(400).json({
      status: 400,
      success: false,
      msg: err.message,
      item: {},
    });
  }
};

const deleteProd = async (req, res) => {
  try {
    const prod = await Product.findById(req.params.id);
    await Product.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: 201,
      success: true,
      msg: "Product deleted!",
      item: prod,
    });
  } catch (err) {
    console.error(`OOPS! There was an error: ${err}`);
    res.status(400).json({
      status: 400,
      success: false,
      msg: err.message,
      item: {},
    });
  }
};

module.exports = {
  getAll,
  getById,
  addProd,
  updateProd,
  deleteProd,
};
