import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { authdata } from './helpers/authdata'; // points to the updated .ts file

export async function middleware(request: NextRequest) {
  const isAuthenticated = await authdata(); // Now returns `AuthData | null`
  const pathName = request.nextUrl.pathname;

  console.log('Pathname:', pathName);
  console.log('isAuthenticated:', isAuthenticated);

  if (!isAuthenticated) {
    if (pathName === "/dashboard" || pathName.startsWith("/dashboard/")) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  } else if (isAuthenticated.role === "admin" || isAuthenticated.role === "manager") {
    if (pathName === "/signin" || pathName === "/signup") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  } else if (isAuthenticated.role === "visitor") {
    if (
      pathName === "/dashboard" ||
      pathName.startsWith("/dashboard/") ||
      pathName === "/signin" ||
      pathName === "/signup"
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/signin", "/signup"],
};
