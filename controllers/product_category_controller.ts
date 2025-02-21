import { Category } from '@/types';
import axios from 'axios';
const apiUrl =
  typeof window !== 'undefined' ? `${window.location.origin}/api` : process.env.NEXT_PUBLIC_API_URL;

class ProductCategoryController {
  constructor() {}

  async create(category: Category) {
    if (category.image instanceof File) {
      const formData = new FormData();
      const jsonData = JSON.stringify({ ...category, image: category.image.name });
      formData.append('category', jsonData);
      formData.append('file', category.image);
      const result = await axios.post(`${apiUrl}/products/categories`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return result;
    }
    return await axios.put(`${apiUrl}/products/categories`, { ...category });
  }
  async update(category: Category) {
    const result = axios.put(`${apiUrl}/products/categories`, { ...category });
    return result;
  }
  async getAll() {
    const result = await axios.get(`${apiUrl}/products/categories`, { timeout: 10000 });
    return result;
  }
  async remove(id: string) {
    const result = await axios.delete(`${apiUrl}/products/categories`, { data: { id } });
    console.log(result);
    return result;
  }

  async uploadImage(file: File) {
    console.log('image', file);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios.post(`${apiUrl}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.filename;
    } catch (error) {
      console.log('Ошибка при загрузке файла');
    }
  }
}

export const productCategoryController = new ProductCategoryController();
