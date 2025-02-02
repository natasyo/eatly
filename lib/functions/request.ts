import { NextResponse } from 'next/server';

export async function requestFunc<T>(callback: () => Promise<T>) {
  try {
    const result = await callback();
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: 'Error creating type' }, { status: 500 });
  }
}
