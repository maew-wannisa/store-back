import mongoose from "mongoose";

const schema = mongoose.Schema;

const ProductSchema = new schema({
  productID: { type: String, required: true, max: 50 },
  productName: { type: String, required: true, max: 1000 },
  productQty: { type: Number, required: true, max: 100 },
  productPrice: { type: Number, required: true, max: 100 },
  shellId: { type: String, required: true, max: 100 },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
