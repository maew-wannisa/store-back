import express from "express";
import Product from "../models/product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // res.send("Product is available");
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

router.post("/create", async (req, res) => {
  try {
    // res.send("Product is available");
    const newProduct = await Product.create(req.body);

    console.log(`Product added successfully ${newProduct}`);
    res.json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});
router.put("/update/:id", async (req, res) => {
  try {
    // res.send("Product is available");
    req.params.id;
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    console.log(`Product updated successfully ${updateProduct}`);
    res.json(updateProduct);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});
router.delete("/del/:id", async (req, res) => {
  try {
    // res.send("Product is available");
    req.params.id;
    const delProduct = await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: delProduct });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

export default router;
