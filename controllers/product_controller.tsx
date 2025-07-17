import { ProductDTO } from '@/types';
import axios from 'axios';
import { apiUrl } from '@/config';

export class ProductController {
  static async create(product: ProductDTO) {
    if (product.image instanceof File) {
      const formData = new FormData();
      const jsonData = JSON.stringify({ ...product, image: product.image.name });
      formData.append('product', jsonData);
      formData.append('image', product.image);
      return await axios.post(`${apiUrl}/products/products`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }
    return axios.post(`${apiUrl}/products/products`, product);
  }
}