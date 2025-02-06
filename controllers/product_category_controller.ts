import { Category } from '@/types';
import axios from 'axios';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

class ProductCategoryController {
  constructor() {}

  async create(category: Category) {
    const formData = new FormData();
    if (category.image && category.image instanceof File) {
      formData.append('file', category.image);
    }
    const result = await axios.post(
      `${apiUrl}/products/category`,
      {
        ...category,
        image: formData,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    console.log(result);
    return result;
  }
  async update(category: Category) {
    const result = axios.put(`${apiUrl}/products/category`, { ...category });
    console.log(result);
    return result;
  }
  async getAll() {
    const result = axios.get(`${apiUrl}/products/category`);
    return result;
  }
  async remove(id: string) {
    const result = await axios.delete(`${apiUrl}/products/category`, { data: { id } });
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
