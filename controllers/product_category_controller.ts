import { Category } from '@/types';
import axios from 'axios';
const apiUrl =
  typeof window !== 'undefined' ? `${window.location.origin}/api` : process.env.NEXT_PUBLIC_API_URL;

class ProductCategoryController {
  constructor() {}

  async create(category: Category) {
    const formData = new FormData();
    const categoryData = {
      ...category,
      image: category.image ? (category.image as File).name : '',
    };
    if (category.image && category.image instanceof File) {
      const file = category.image;
      formData.append('file', file);
    }
    formData.append('category', JSON.stringify(categoryData));
    const result = await axios.post(`${apiUrl}/products/categories`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  }
  async update(category: Category) {
    const result = axios.put(`${apiUrl}/products/categories`, { ...category });
    console.log(result);
    return result;
  }
  async getAll() {
    const result = await axios.get(`${apiUrl}/products/categories`);
    if (result.status === 200) return result.data;
    return { message: 'Error' };
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
