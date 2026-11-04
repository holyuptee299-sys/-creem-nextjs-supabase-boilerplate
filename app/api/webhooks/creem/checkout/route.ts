import { NextResponse } from 'next/server'
export async function POST(){
 return NextResponse.json({checkout_url:'https://creem.io'})
}
