import express from "express";
import { engine } from "express-handlebars";
import viewsRouter from "./routes/views.router.js";

const app = express();
app.use(express.static("public"));

// Configuracion de Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/", viewsRouter);

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
