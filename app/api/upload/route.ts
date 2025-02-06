import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
    }
    // console.log(file);
    // Чтение файла
    const buffer = Buffer.from(await file.arrayBuffer());

    // Сохранение файла
    const filePath = path.join(process.cwd(), 'public/img/upload', file.name);
    fs.writeFileSync(filePath, buffer);
    return NextResponse.json(
      { message: 'File uploaded successfully', filename: file.name },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: 'Failed to upload file' }, { status: 500 });
  }
}
