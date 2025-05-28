function logProduct(product) {
    console.log("Product ID: ".concat(product.id, ", Name: ").concat(product.name, ", Price: $").concat(product.price, ", In Stock: ").concat(product.inStock));
}
var testProduct = {
    id: 1,
    name: "Laptop",
    price: 999.99,
    inStock: true,
};
logProduct(testProduct);
