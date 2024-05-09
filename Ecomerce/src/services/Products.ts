import { productType } from "../types/Product";
import Sleep from "../utils/Sleep";

export async function createProduct(
  categoryId: number,
  newProduct: productType
) {
  let response;
  try {
    response = await fetch(
      `https://${
        import.meta.env.VITE_API_URL
      }.mockapi.io/api/v1/categories/${categoryId}/products`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newProduct),
      }
    );
    if (!response.ok) throw new Error("Error to create product");
  } catch (error) {
    console.error("Error occurred while creating product: ", error);
    throw error;
  } finally {
    console.log("Finished creating product");
  }

  try {
    const responseData: productType = await response.json();
    Sleep(4000);
    return responseData;
  } catch (error) {
    console.error("Error occurred while parsing response: ", error);
    throw error;
  }
}

export async function getAllProducts() {
  let response;
  try {
    response = await fetch(
      `https://${import.meta.env.VITE_API_URL}.mockapi.io/api/v1/products`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) throw new Error("Error to get products");
  } catch (error) {
    console.error("Error occurred while fetching products: ", error);
    throw error;
  } finally {
    console.log("Finished fetching products");
  }

  try {
    const responseData: productType[] = await response.json();
    Sleep(4000);
    return responseData;
  } catch (error) {
    console.error("Error occurred while parsing response: ", error);
    throw error;
  }
}

export async function getProductById(categoryId: string, productId: string) {
  let response;
  try {
    response = await fetch(
      `https://${
        import.meta.env.VITE_API_URL
      }.mockapi.io/api/v1/categories/${categoryId}/products/${productId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) throw new Error("Error to get product");
  } catch (error) {
    console.error("Error occurred while fetching product: ", error);
    throw error;
  } finally {
    console.log("Finished fetching product");
  }
  try {
    const responseData: productType = await response.json();
    Sleep(4000);
    return responseData;
  } catch (error) {
    console.error("Error occurred while parsing response: ", error);
    throw error;
  }
}

export async function getProductByCategory(categoryId: number, page: number) {
  let endpoint;

  if (categoryId !== 0) {
    endpoint = `https://${
      import.meta.env.VITE_API_URL
    }.mockapi.io/api/v1/categories/${categoryId}/products`;
  } else {
    endpoint = `https://${
      import.meta.env.VITE_API_URL
    }.mockapi.io/api/v1/products`;
  }
  const url = new URL(`${endpoint}`);
  url.searchParams.append("limit", "5");
  url.searchParams.append("page", page.toString());

  let response;
  try {
    response = await fetch(`${url}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("Error to get products by category");
  } catch (error) {
    console.error(
      "Error occurred while fetching products by category: ",
      error
    );
    throw error;
  } finally {
    console.log("Finished fetching products by category");
  }

  try {
    const responseData: productType[] = await response.json();
    Sleep(4000);
    return responseData;
  } catch (error) {
    console.error("Error occurred while parsing response: ", error);
    throw error;
  }
}

export async function updateProduct(
  categoryId: string,
  productId: string,
  updatedProduct: productType
) {
  let response;
  try {
    response = await fetch(
      `https://${
        import.meta.env.VITE_API_URL
      }.mockapi.io/api/v1/categories/${categoryId}/products/${productId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      }
    );
    if (!response.ok) throw new Error("Error updating product");
  } catch (error) {
    console.error("Error occurred while updating product: ", error);
    throw error;
  } finally {
    console.log("Finished updating product");
  }

  try {
    const responseData: productType = await response.json();
    Sleep(4000);
    return responseData;
  } catch (error) {
    console.error("Error occurred while parsing response: ", error);
    throw error;
  }
}

export async function deleteProduct(categoryId: number, productId: number) {
  let response;
  try {
    response = await fetch(
      `https://${
        import.meta.env.VITE_API_URL
      }.mockapi.io/api/v1/categories/${categoryId}/products/${productId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) throw new Error("Error deleting product");
  } catch (error) {
    console.error("Error occurred while deleting product: ", error);
    throw error;
  } finally {
    console.log("Finished deleting product");
  }

  try {
    const responseData: productType = await response.json();
    Sleep(4000);
    return responseData;
  } catch (error) {
    console.error("Error occurred while parsing response: ", error);
    throw error;
  }
}
