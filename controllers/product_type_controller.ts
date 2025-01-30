import { TypeDTO } from '@/types';

export class ProductTypeController {
  constructor() {}
  async create(type: TypeDTO) {
    const result = await fetch('http://localhost:3000/api/products/type', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(type),
    });
    return result;
  }
}
