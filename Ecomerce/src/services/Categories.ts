import { categoryType } from "../types/Category";

export async function createCategory(newCategory: categoryType) {
  try {
    const response = await fetch(
      `https://${import.meta.env.VITE_API_URL}.mockapi.io/api/v1/categories`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        // Send your data in the request body as JSON
        body: JSON.stringify(newCategory),
      }
    );
    if (!(await response).ok) throw new Error("Error al enviar los datos");
    const responseData: categoryType = await response.json();
    return responseData;
  } catch (error) {
    throw error;
  }
}
export async function getAllCategories() {
  try {
    const response = await fetch(
      `https://${import.meta.env.VITE_API_URL}.mockapi.io/api/v1/categories`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) throw new Error("Error to get categories");
    const categories: categoryType[] = await response.json();
    return categories;
  } catch (error) {
    throw error;
  }
}

export async function getCategoryById(id: number) {
  try {
    const response = await fetch(
      `https://${
        import.meta.env.VITE_API_URL
      }.mockapi.io/api/v1/categories/${id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (await !response.ok) throw new Error("Error to get category");
    const category = await response.json();
    return category;
  } catch (error) {
    throw error;
  }
}

export async function updateCategory(
  id: number,
  categoryUpdated: categoryType
) {
  try {
    const response = await fetch(
      `https://${
        import.meta.env.VITE_API_URL
      }.mockapi.io/api/v1/categories/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        // Send your data in the request body as JSON
        body: JSON.stringify(categoryUpdated),
      }
    );
    if (await !response.ok) throw new Error("Error to get category");
    const category = await response.json();
    return category;
  } catch (error) {
    throw error;
  }
}

export async function deleteCategory(id: number) {
  try {
    const response = await fetch(
      `https://${
        import.meta.env.VITE_API_URL
      }.mockapi.io/api/v1/categories/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (await !response.ok) throw new Error("Error to get delete");
    const category = await response.json();
    return category;
  } catch (error) {
    throw error;
  }
}
