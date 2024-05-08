import { categoryType } from '../types/Category'

export async function createCategory(newCategory: categoryType) {
  let response 
  try {
   response = await fetch(
      `https://${import.meta.env.VITE_API_URL}.mockapi.io/api/v1/categories`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newCategory),
      }
    )

    if (!response.ok) throw new Error('Error sending data')

    const responseData: categoryType = await response.json()
    return responseData
  } catch (e) {
    
    console.error(e)
    throw e
  } finally {
    console.log('Finished creating category')
  }
}

export async function getAllCategories() {
  let response
  try {
    response = await fetch(
      `https://${import.meta.env.VITE_API_URL}.mockapi.io/api/v1/categories`
    )

    if (!response.ok) throw new Error('Error fetching data')

    const responseData: categoryType[] = await response.json()
    return responseData
  } catch (e) {
    console.error(e)
    throw e
  } finally {
    console.log('Finished fetching categories')
  }
}

export async function getCategoryById(id: string) {
  let response
  try {
   response = await fetch(
      `https://${import.meta.env.VITE_API_URL}.mockapi.io/api/v1/categories/${id}`
    )

    if (!response.ok) throw new Error('Error fetching data')

    const responseData: categoryType = await response.json()
    return responseData
  } catch (e) {
    console.error(e)
    throw e
  } finally {
    console.log('Finished fetching category')
  }
}

export async function updateCategory(id: string, updatedCategory: categoryType) {
  let response
  try {
    response = await fetch(
      `https://${import.meta.env.VITE_API_URL}.mockapi.io/api/v1/categories/${id}`,
      {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(updatedCategory),
      }
    )

    if (!response.ok) throw new Error('Error updating data')

    const responseData: categoryType = await response.json()
    return responseData
  } catch (e) {
    console.error(e)
    throw e
  } finally {
    console.log('Finished updating category')
  }
}

export async function deleteCategory(id: string) {
  let response
  try {
     response = await fetch(
      `https://${import.meta.env.VITE_API_URL}.mockapi.io/api/v1/categories/${id}`,
      {
        method: 'DELETE',
      }
    )

    if (!response.ok) throw new Error('Error deleting data')

    return true
  } catch (e) {
    console.error(e)
    throw e
  } finally { 
    console.log('Finished deleting category')
  }
}
