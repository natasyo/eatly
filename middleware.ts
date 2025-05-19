import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req:NextRequest){
  const token=await getToken({req})
  console.log('token',token)
  return NextResponse.next()
}

export const config={}