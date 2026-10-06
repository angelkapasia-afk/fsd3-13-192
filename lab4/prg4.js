import { products } from "./data.js";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`
        <h1> home page </h1>
        <a href="/api/products"> Browse products</a>`);
});

app.get("/api/products", (req, res) => {
  const items = products.map(({ reviews, description, ...rest }) => rest);
  res.status(200).json({ count: products.length, data: items });
});
//QUERY STRING / request query must be before req parameter or dynamic url
app.get("/api/products/query", (req, res) => {
  const { search, limit, mp } = req.query;
  console.log("search:", search);
  console.log("limit:", limit);
  let sortedProducts = [...products];

  if (mp) {
    sortedProducts = sortedProducts.filter((item) => {
      return item.price <= Number(mp);
    });
  }
  if (search) {
    sortedProducts = sortedProducts.filter((item) => {
      item.name = item.name.toLowerCase().startsWith(search.toLowerCase());
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1)
    return res
      .status(200)
      .json({ data: [], msg: "no products matched your search" });
  else
    res.status(200).json({
      count: sortedProducts.length,
      data: sortedProducts,
      msg: "products found",
    });
});
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const p = products.find((item) => item.id === Number(id));
  if (p) res.status(200).json({ status: true, product: p });
  else
    res
      .status(404)
      .json({ status: false, msg: `product not found with id ${id}` });
});

app.get("/api/products/:id/reviews", (req, res) => {
  res.send("return all reviews for a product with id");
});

app.get("/api/products/:id/:revid", (req, res) => {
  const { id, revid } = req.params;
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    res.end(`product not found with id ${id}`);
    return;
  }

  review = product.reviews.map((item) => item.id === Number(revid));
  if (!review) {
    res.end(`review not found with id ${revid}`);
    return;
  }

  return res.status(200).json({ status: true, review: review });
});

app.use((req, res) => {
  res.status(404).send("route not found");
});
app.listen(3333, () => console.log("prg4 is running..."));
