const API_URL = "https://fakestoreapi.com"

export async function fetchProducts() {
  try {
    const response = await fetch(`${API_URL}/products`)
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export async function fetchCategories() {
  try {
    const response = await fetch(`${API_URL}/products/categories`)
    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching categories:", error)
    return []
  }
}

export async function fetchProductById(id) {
  try {
    const response = await fetch(`${API_URL}/products/${id}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch product ${id}: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error)
    return null
  }
}

export async function fetchProductsByCategory(category) {
  try {
    const response = await fetch(`${API_URL}/products/category/${category}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch products in category ${category}: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error)
    return []
  }
}

export async function createProduct(productData) {
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
    if (!response.ok) {
      throw new Error(`Failed to create product: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error("Error creating product:", error)
    return null
  }
}

export async function updateProduct(id, productData) {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
    if (!response.ok) {
      throw new Error(`Failed to update product ${id}: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error(`Error updating product ${id}:`, error)
    return null
  }
}

export async function deleteProduct(id) {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      throw new Error(`Failed to delete product ${id}: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error(`Error deleting product ${id}:`, error)
    return null
  }
}