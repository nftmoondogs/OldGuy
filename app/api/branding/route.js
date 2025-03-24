import { NextResponse } from 'next/server';

// In-memory state since we don't have database access
let globalIsFourMeme = false;

export async function GET() {
  return NextResponse.json({ isFourMeme: globalIsFourMeme });
}

export async function POST(request) {
  const data = await request.json();
  globalIsFourMeme = data.isFourMeme;
  return NextResponse.json({ success: true });
} 