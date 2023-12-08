import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auther } from './AUTH/Auth';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/Home')) {
    const { login } = auther();
    if (!login) return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}
