import express from "express";
import ProductManager from "../ProductManager.js";

const viewsRouter = express.Router();
const productManager = new ProductManager("products.json");

viewsRouter.get("/", async (req, res) => {
  try {
    const user = { username: "John Doe", isAdmin: true };
    const products = await productManager.getProducts();
    res.render("home", { products, user });
    if (!products || products.length === 0) {
      console.warn("No products found, using default products array.");
      // Fallback to default products if none are found
      return res.render("home", { products: products, user });
    }
    res.render("home", { products, user });
  } catch (error) {
    console.error("Error rendering home:", error);
    res.status(500).send("Internal Server Error");
  }
});

viewsRouter.get("/contact", async (req, res) => {
  try {
    const user = { username: "John Doe", isAdmin: true };
    res.render("contact", { title: "Contact Us", user });
  } catch (error) {
    console.error("Error rendering contact:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default viewsRouter;
