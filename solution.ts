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

interface ApiResult<T> {
  data: T;
  success: boolean;
  message: string;
}

function handleApiResult(result: ApiResult<Product>): void {
  if (result.success) {
    const { id, name, price, inStock } = result.data;
    console.log(
      `Product ID: ${id}, Name: ${name}, Price: $${price}, In Stock: ${inStock}`
    );
  } else {
    console.error(`An error has occured: ${result.message}`);
  }
}

const apiResultSuccess: ApiResult<Product> = {
  data: testProduct,
  success: true,
  message: "Product fetched successfully",
};

const apiResultError: ApiResult<Product> = {
  data: testProduct2,
  success: false,
  message: "Product not found",
};

handleApiResult(apiResultSuccess);
handleApiResult(apiResultError);
