import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req:NextRequest){
  const token=await getToken({req})
  return NextResponse.next()
}

export const config={}