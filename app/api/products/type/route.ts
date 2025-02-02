import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { TypeDTO } from '@/types';

async function requestFunc(callback: () => Promise<TypeDTO>) {
  try {
    const result = await callback();
    console.log(result);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: 'Error creating type' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const types = await prisma.type.findMany();
    return NextResponse.json(types);
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  return requestFunc(async () => {
    const data = await req.json();
    const result = await prisma.type.create({ data: data });
    return result;
  });
}
export async function DELETE(req: Request) {
  try {
    const data = await req.json();
    const result = await prisma.type.delete({ where: { id: data.id } });
    return NextResponse.json(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('An unknown error occurred', error);
    }
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  return requestFunc(async () => {
    const data = await req.json();
    const result = await prisma.type.update({ where: { id: data.id }, data });
    return result;
  });
}
// try {
//   const data = await req.json();
//   const result = await prisma.type.update({ where: { id: data.id }, data });
//   console.log(result);
//   return NextResponse.json(result);
// } catch (error: unknown) {
//   if (error instanceof Error) {
//     console.error(error.message);
//   } else {
//     console.error('An unknown error occurred', error);
//   }
// }
// }
