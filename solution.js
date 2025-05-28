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
function handleApiResult(result) {
    if (result.success) {
        var _a = result.data, id = _a.id, name_1 = _a.name, price = _a.price, inStock = _a.inStock;
        console.log("Product ID: ".concat(id, ", Name: ").concat(name_1, ", Price: $").concat(price, ", In Stock: ").concat(inStock));
    }
    else {
        console.error("An error has occured: ".concat(result.message));
    }
}
var apiResultSuccess = {
    data: testProduct,
    success: true,
    message: "Product fetched successfully",
};
var apiResultError = {
    data: testProduct2,
    success: false,
    message: "Product not found",
};
handleApiResult(apiResultSuccess);
handleApiResult(apiResultError);
