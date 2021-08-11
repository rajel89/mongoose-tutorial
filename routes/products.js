const { Product, validate } = require("../models/products");
const express = require("express");
const router = express.Router();

// All endpoints and route handlers go here

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error);

    const product = new Product({
      question: req.body.question,
      answer: req.body.answer,
      // category: req.body.category,
      // price: req.body.price,
    });

    await product.save();

    return res.send(product);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error);

    const product = await Product.findByIdAndUpdate(
req.params.id,
      {
        question: req.body.question,
        answer: req.body.answer,
        // category: req.body.category,
        // price: price.body.price,
      },
      { new: true }
    );
    if (!product)
      return res
        .status(400)
        .send(`The product with id "${req.params.id}" does not exist.`);
    await product.save();
    return res.send(product);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    return res.send(products);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res
        .status(400)
        .send(`The product with id "${req.paramsid}" dos not exist.`);
    return res.send(product);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    if (!product)
      return res
        .status(400)
        .send(`The product with id "${req.params.id}" doesnot exist.`);
        return res.send(product);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

module.exports = router;
