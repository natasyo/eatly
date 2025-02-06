import { NextResponse } from 'next/server';

export async function requestFunc<T>(callback: () => Promise<T>) {
  try {
    const result = await callback();
    return NextResponse.json(result);
  } catch (err: unknown) {
    console.log((err as Error).message);
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
