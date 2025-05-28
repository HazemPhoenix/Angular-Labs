interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

function logProduct(product: Product): void {
  console.log(
    `Product ID: ${product.id}, Name: ${product.name}, Price: $${product.price}, In Stock: ${product.inStock}`
  );
}

const testProduct: Product = {
  id: 1,
  name: "Laptop",
  price: 999.99,
  inStock: true,
};

logProduct(testProduct);
