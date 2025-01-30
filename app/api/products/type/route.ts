import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Type } from '@prisma/client';

export async function GET() {
  try {
    const users = await prisma.type.findMany();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const result = await prisma.type.create({ data: data });
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: 'Error creating type' }, { status: 500 });
  }
}
