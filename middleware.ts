import { type NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const originalHost = requestHeaders.get('host') || '';
  const originalReferer = requestHeaders.get('referer') || '';

  console.log('\n\n[MW] DEV_NEXT:', process.env.DEV_NEXT);
  console.log('[MW] DEV_TURBO:', process.env.DEV_TURBO);
  console.log('[MW] Original request.url:', request.url);
  console.log('[MW] Original pathname:', request.nextUrl.pathname);
  console.log('[MW] Original host:', originalHost);
  console.log('[MW] Original referer:', originalReferer);

  let newHost;

  if (originalHost.endsWith('.local:3000')) {
    newHost = originalHost.replace('.local:3000', ':3000');
    requestHeaders.set('host', newHost);
    if (originalReferer.includes('.local:3000')) {
      requestHeaders.set('referer', originalReferer.replace('.local:3000', ':3000'));
    }
  }

  console.log('[MW] final host:', requestHeaders.get('host'));
  console.log('[MW] final referer:', requestHeaders.get('referer'));

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}


/*
Denied
    /_next/static/chunks/main.js
    /_next/image?url=/logo.png
    /favicon.ico
    /blah.svg
    /blah.png
    /blah.jpg
    /blah.js.map
    /undefined
Allowed
    /about
    /api/grafana-logger
*/

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|/js/bcsplow_3.1.0.js|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.js\\.map|undefined).*)',
  ],
};
