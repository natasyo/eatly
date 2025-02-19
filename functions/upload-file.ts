import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function uploadFile(formData: FormData) {
  try {
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
    }
    // console.log(file);
    // Чтение файла
    const buffer = Buffer.from(await (file as File).arrayBuffer());

    // Сохранение файла
    const filePath = path.join(process.cwd(), 'public/img/upload', (file as File).name);
    fs.writeFileSync(filePath, buffer);
    return NextResponse.json(
      { message: 'File uploaded successfully', filename: (file as File).name },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: 'Failed to upload file' }, { status: 500 });
  }
}
