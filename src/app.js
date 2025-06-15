import express from "express";
import { engine } from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
import productsRouter from "./routes/products.router.js";

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/", viewsRouter);
app.use("/api/products", productsRouter);

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
