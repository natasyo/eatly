import { TypeDTO } from '@/types';
import axios from 'axios';
const apiUrl =
  typeof window !== 'undefined' ? `${window.location.origin}/api` : process.env.NEXT_PUBLIC_API_URL;

class ProductTypeController {
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
    const result = await axios.get(`${apiUrl}/products/type`, { timeout: 10000 });
    return result;
  }
  async remove(id: string) {
    const result = await axios.delete(`${apiUrl}/products/type`, { data: { id } });
    console.log(result);
    return result;
  }
}

export const productTypeController = new ProductTypeController();
