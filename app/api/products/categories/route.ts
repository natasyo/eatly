import { requestFunc } from '@/lib/functions';
import { prisma } from '@/lib/prisma';
import fs from 'fs';
import path from 'path';

export async function GET() {
  return requestFunc(async () => {
    return await prisma.category.findMany();
  });
}

export async function POST(req: Request) {
  return requestFunc(async () => {
    const formData = await req.formData();
    const dataString = formData.get('category')?.toString();
    const data = dataString && JSON.parse(dataString);
    const file = formData.get('file');
    const result = await prisma.category.create({ data: data });
    console.log(file);
    if (file && file instanceof File) {
      const buffer = await Buffer.from(await file.arrayBuffer());
      const filePath = path.join(process.cwd(), 'public/img/upload/categories', `${file.name}`);
      console.log(filePath);
      fs.writeFileSync(filePath, buffer);
    }
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
