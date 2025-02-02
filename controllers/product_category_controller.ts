import { Category } from '@/types';
import axios from 'axios';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

class ProductCategoryController {
  private static _instance: ProductCategoryController;
  constructor() {}
  async create(category: Category) {
    // const result = axios.post(`${apiUrl}/products/categories`, { ...type });
    // return result;
  }
  async update(category: Category) {
    const result = axios.put(`${apiUrl}/products/categories`, { ...category });
    return result;
  }
  async getAll() {
    const result = axios.get(`${apiUrl}/products/categories`);
    return result;
  }
  async remove(id: string) {
    const result = await axios.delete(`${apiUrl}/products/categories`, { data: { id } });
    console.log(result);
    return result;
  }
}

export const productCategoryController = new ProductCategoryController();
