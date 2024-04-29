import { productType } from "../types/Product";

export async function createProduct(
  categoryId: number,
  newProduct: productType
) {
  try {
    const response = await fetch(
       `https://${import.meta.env.VITE_API_URL}.mockapi.io/api/v1/categories/${categoryId}/products`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        // Send your data in the request body as JSON
        body: JSON.stringify(newProduct),
      }
    );
    if (!(await response).ok) throw new Error("Error to create product");
    const responseData: productType = await response.json();
    return responseData;
  } catch (error) {
    throw error;
  }
}

export async function getAllProducts() {
  try {
    const response = await fetch(
      // `https://${import.meta.env.VITE_API_URL}.mockapi.io/api/v1/products`,
      `https://661fe9df16358961cd95e466.mockapi.io/api/v1/products`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) throw new Error("Error to get products");
    const products: productType[] = await response.json();
    return products;
  } catch (error) {
    throw error;
  }
}

export async function getProductById(categoryId: number, productId: number) {
  try {
    const response = await fetch(
      `https://${
        import.meta.env.VITE_API_URL
      }.mockapi.io/api/v1/categories/${categoryId}/products/${productId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (await !response.ok) throw new Error("Error to get product");
    const product = await response.json();
    return product;
  } catch (error) {
    throw error;
  }
}

export async function getProductByCategory(categoryId: number) {
  try {
    const response = await fetch(
      `https://${
        import.meta.env.VITE_API_URL
      }.mockapi.io/api/v1/categories/${categoryId}/products`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (await !response.ok)
      throw new Error("Error to get products by category");
    const products = await response.json();
    return products;
  } catch (error) {
    throw error;
  }
}

export async function updateProduct(
  categoryId: number,
  productId: number,
  Updatedproduct: productType
) {
  try {
    const response = await fetch(
      `https://${
        import.meta.env.VITE_API_URL
      }.mockapi.io/api/v1/categories/${categoryId}/products/${productId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        // Send your data in the request body as JSON
        body: JSON.stringify(Updatedproduct),
      }
    );
    if (await !response.ok) throw new Error("Error to update product");
    const product = await response.json();
    return product;
  } catch (error) {
    throw error;
  }
}

export async function deleteProduct(categoryId: number, productId: number) {
  try {
    const response = await fetch(
      `https://${
        import.meta.env.VITE_API_URL
      }.mockapi.io/api/v1/categories/${categoryId}/products/${productId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (await !response.ok) throw new Error("Error to delete");
    const product = await response.json();
    return product;
  } catch (error) {
    throw error;
  }
}
