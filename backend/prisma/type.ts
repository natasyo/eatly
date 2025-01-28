import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createType = async () => {
  try {
    const result = await prisma.type.create({
      data: {
        bgColor: '#33ac64',
        title: 'Supreme',
      },
    });
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
