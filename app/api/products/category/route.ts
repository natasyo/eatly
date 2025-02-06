import { requestFunc } from '@/lib/functions';
import { prisma } from '@/lib/prisma';

export async function GET() {
  return requestFunc(async () => {
    const types = await prisma.category.findMany();
    return types;
  });
}

export async function POST(req: Request) {
  return requestFunc(async () => {
    const data = await req.json();
    const result = await prisma.category.create({ data: data });
    console.log(result);
    return result;
  });
}
export async function DELETE(req: Request) {
  return requestFunc(async () => {
    const data = await req.json();
    const result = await prisma.category.delete({ where: { id: data.id } });
    return result;
  });
}

export async function PUT(req: Request) {
  return requestFunc(async () => {
    const data = await req.json();
    const result = await prisma.category.update({ where: { id: data.id }, data });
    return result;
  });
}
