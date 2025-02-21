import { apiUrl } from '@/config';
import { TypeDTO } from '@/types';
import axios from 'axios';

class ProductTypeController {
  async create(type: TypeDTO) {
    const result = axios.post(`${apiUrl}/products/type`, { ...type });
    return result;
  }
  async update(type: TypeDTO) {
    const result = await axios.put(`${apiUrl}/products/type`, { ...type });
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
  async checkImage(url: string) {
    console.log(axios.head(url));
  }
}

export const productTypeController = new ProductTypeController();
