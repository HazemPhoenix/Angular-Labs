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
var testProduct2 = {
    id: 2,
    name: "Smartphone",
    price: 499.99,
    inStock: false,
};
function wrapValue(value) {
    return [value];
}
var wrappedProduct = wrapValue(testProduct2);
console.log(wrappedProduct);
