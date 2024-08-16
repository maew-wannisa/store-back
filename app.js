import express from "express";
import productRoute from "./routes/product.route.js";
import mongoose from "mongoose";
import dbConfig from "./database/db.js";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const port = 8000;
// console.log(dbConfig.db);
mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.db)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.error(err));

app.use("/product", productRoute);

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(port, () => {
  console.log(`server: ${port}`);
});

export default app;
