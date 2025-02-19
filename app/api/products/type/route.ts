import { prisma } from '@/lib/prisma';
import { requestFunc } from '@/lib/functions';

export async function GET() {
  return requestFunc(async () => {
    const types = await prisma.type.findMany();
    return types;
  });
}

export async function POST(req: Request) {
  return requestFunc(async () => {
    const data = await req.json();
    const result = await prisma.type.create({ data: data });
    return result;
  });
}
export async function DELETE(req: Request) {
  return requestFunc(async () => {
    const data = await req.json();
    const result = await prisma.type.delete({ where: { id: data.id } });
    return result;
  });
}

export async function PUT(req: Request) {
  return requestFunc(async () => {
    const data = await req.json();
    const result = await prisma.type.update({ where: { id: data.id }, data });
    return result;
  });
}
