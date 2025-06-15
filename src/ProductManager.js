import fs from "fs/promises";
import path from "path";

class ProductManager {
  constructor(filePath) {
    this.path = path.resolve("src/data", filePath);
  }

  async #readFile() {
    try {
      const data = await fs.readFile(this.path, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  async #writeFile(products) {
    await fs.writeFile(this.path, JSON.stringify(products, null, 2));
  }

  async getProducts() {
    return await this.#readFile();
  }

  async addProduct(productData) {
    let {
      title,
      description,
      price,
      code,
      stock,
      category,
      status = true,
      thumbnails = [],
    } = productData;
    if (
      !title ||
      !description ||
      price === undefined ||
      !code ||
      stock === undefined ||
      !category
    ) {
      throw new Error("Todos los campos son obligatorios");
    }
    const products = await this.#readFile();
    if (products.some((p) => p.code === code)) {
      throw new Error("El código ya existe");
    }
    if (!Array.isArray(thumbnails)) {
      thumbnails = [thumbnails];
    }
    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      title,
      description,
      price,
      code,
      stock,
      category,
      status,
      thumbnails,
    };
    products.push(newProduct);
    await this.#writeFile(products);
    return newProduct;
  }
}

export default ProductManager;
