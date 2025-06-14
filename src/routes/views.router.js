import express from "express";

const viewsRouter = express.Router();

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

viewsRouter.get("/", (req, res) => {
  const user = { username: "John Doe", isAdmin: true };
  res.render("home", { products, user });
});

viewsRouter.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us", user });
});

export default viewsRouter;
