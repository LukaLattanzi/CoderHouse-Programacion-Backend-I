class ProductManager {
    constructor() {
        this.products = [];
        this.currentId = 1; // Para manejar el ID autoincrementable
    }

    addProduct(product) {
        // Validar que todos los campos sean obligatorios
        const { title, description, price, thumbnail, code, stock } = product;
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios.");
            return;
        }

        // Validar que no se repita el campo `code`
        const codeExists = this.products.some(p => p.code === code);
        if (codeExists) {
            console.error(`El código "${code}" ya existe.`);
            return;
        }

        // Agregar el producto con un ID autoincrementable
        const newProduct = {
            id: this.currentId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            console.error("Not found");
            return null;
        }
        return product;
    }
}

// Ejemplo de uso
const manager = new ProductManager();

// Agregar productos
manager.addProduct({
    title: "Producto 1",
    description: "Descripción del producto 1",
    price: 100,
    thumbnail: "ruta/imagen1.jpg",
    code: "abc123",
    stock: 10
});

manager.addProduct({
    title: "Producto 2",
    description: "Descripción del producto 2",
    price: 200,
    thumbnail: "ruta/imagen2.jpg",
    code: "def456",
    stock: 5
});

// Obtener todos los productos
console.log(manager.getProducts());

// Buscar producto por ID
console.log(manager.getProductById(1)); // Producto con ID 1
console.log(manager.getProductById(99)); // Not found