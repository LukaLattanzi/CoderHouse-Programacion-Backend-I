import express from "express";
import ProductManager from "../ProductManager.js";

const router = express.Router();
const productManager = new ProductManager("products.json");

router.post("/", async (req, res) => {
  try {
    const { title, description, price, code, stock, category, thumbnails } =
      req.body;
    let thumbnailsArr = [];
    if (thumbnails) {
      thumbnailsArr = thumbnails.split(",").map((url) => url.trim());
    }
    await productManager.addProduct({
      title,
      description,
      price: Number(price),
      code,
      stock: Number(stock),
      category,
      thumbnails: thumbnailsArr,
    });
    res.redirect("/");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
