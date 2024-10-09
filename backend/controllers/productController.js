import mongoose from 'mongoose';
import Product from './../models/productModel.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      status: 'success',
      results: products.length,
      data: products,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: 'failed', message: 'Something went wrong!' });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || !price) {
      return res
        .status(400)
        .json({ status: 'failed', message: 'Please provide name and price' });
    }

    const newProduct = await Product.create(req.body);

    res.status(201).json({
      status: 'success',
      data: newProduct,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: 'failed', message: 'Something went wrong!' });
  }
};

export const updateProduct = async (req, res) => {
  try {
    // Validate the ID before proceeding
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        status: 'fail',
        message: `Invalid product ID: ${req.params.id}`,
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      status: 'success',
      data: updatedProduct,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: 'failed', message: 'Something went wrong!' });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    // Validate the ID before proceeding
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        status: 'fail',
        message: `Invalid product ID: ${req.params.id}`,
      });
    }

    // Attempt to find and delete the product
    const product = await Product.findByIdAndDelete(req.params.id);

    // If no product found with that ID, return a 404 error
    if (!product) {
      return res.status(404).json({
        status: 'fail',
        message: `No product found with ID: ${req.params.id}`,
      });
    }

    // If successful, respond with a success message
    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    // Catch any other errors and respond with a 500 status code
    console.error(err);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong!',
    });
  }
};
