import { products } from "./data.js";
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send(`\<h1>home page </h1>
        <a href='/api/products'> Browse Products </a>`);
});

app.get("/api/products", (req, res) => {
  const modProducts = products.map(({ reviews, description, ...rest }) => rest);

  res.status(200).json({ count: modProducts.length, data: modProducts });
});
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const p = products.find((item) => item.id === Number(id));
  if (p) res.status(200).json({ status: true, data: p });
  else
    res
      .status(404)
      .json({ status: false, msg: `product not found with id ${id}` });
});

app.use((req, res) => {
  res.status(404).send("route not found ");
});

app.listen(3333, () => console.log("prg4 is running..."));
