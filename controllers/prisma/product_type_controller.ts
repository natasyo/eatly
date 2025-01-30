import { TypeDTO } from '@/types';
import { PrismaClient } from '@prisma/client';

export class ProductTypeController {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  create(type: TypeDTO) {
    console.log(type);
  }
}
