import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value
  const refreshToken = request.cookies.get("refreshToken")?.value
  const userRole = request.cookies.get("userRole")?.value

  // Protected routes
  const protectedRoutes = ["/dashboard"]
  const authRoutes = ["/login", "/register", "/forgot-password"]

  const isProtectedRoute = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  const isAuthRoute = authRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

  // Redirect to login if accessing protected route without token
  if (isProtectedRoute && !token && !refreshToken) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Redirect authenticated users away from auth pages
  if (isAuthRoute && token) {
    if (userRole === "admin") {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    

    } else {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }

  // Role-based route protection
  if (request.nextUrl.pathname.startsWith("/dashboard") && userRole !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }



  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login",
    "/register",
    "/forgot-password",
  ],
}
