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

type ProductOrError = Product | string;

const testProduct2: ProductOrError = {
  id: 2,
  name: "Smartphone",
  price: 499.99,
  inStock: false,
};

function wrapValue<T>(value: T): T[] {
  return [value];
}

const wrappedProduct = wrapValue(testProduct2);
console.log(wrappedProduct);
