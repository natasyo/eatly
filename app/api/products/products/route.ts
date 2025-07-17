import { requestFunc } from '@/lib/functions';
import { prisma } from '@/lib/prisma';
import path from 'path';
import fs from 'fs';

export async function POST(req: Request) {
  return requestFunc(async () => {
   const formData=await req.formData();
   const dataString = formData.get('product')?.toString();
   const data=dataString&&JSON.parse(dataString);
   const file=formData.get('image');
   const result=await prisma.product.create({data});
   console.log(file);
   if (file && file instanceof File) {
     const buffer = await Buffer.from(await file.arrayBuffer());
     const filePath = path.join(process.cwd(), 'public/img/upload/products', `${file.name}`);
     fs.writeFileSync(filePath, buffer);
   }
   return result;
 })
}