import { TypeDTO } from '@/types';
import axios from 'axios';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

class ProductTypeController {
  private static _instance: ProductTypeController;
  constructor() {}
  async create(type: TypeDTO) {
    const result = axios.post(`${apiUrl}/products/type`, { ...type });
    return result;
  }
  async update(type: TypeDTO) {
    const result = axios.put(`${apiUrl}/products/type`, { ...type });
    return result;
  }
  async getAll() {
    const result = axios.get(`${apiUrl}/products/type`);
    return result;
  }
  async remove(id: string) {
    const result = await axios.delete(`${apiUrl}/products/type`, { data: { id } });
    console.log(result);
    return result;
  }
}

export const productTypeController = new ProductTypeController();
