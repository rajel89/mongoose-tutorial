const mongoose = require("mongoose");
const Joi = require('joi');


const productSchema = new mongoose.Schema({
  question: { type: String, required: true, minlength: 2, maxlength: 150 },
  answer: { type: String, required: true },
  
  // name: { type: String, required: true, minlength: 2, maxlength: 50 },
  // description: { type: String, required: true },
  // category: { type: String, required: true, minlength: 5, maxlength: 50 },
  // price: { type: Number, required: true },
  // dateAdded: { type: Date, default: Date.now }, 
});
const Product = mongoose.model('Product', productSchema);

function validateProduct (product){
  const schema = Joi.object({
    question: Joi.string().min(2).max(150).required(),
    answer:Joi.string().required(),

    // name: Joi.string().min(2).max(50).required(),
    // description:Joi.string().required(),
    // category:Joi.string().min(5).max(50).required(),
    // price: Joi.number().required(),
  });
  return schema.validate(product);
}

exports.Product = Product;
exports.validate=validateProduct;
exports.productSchema = productSchema;

