import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const publicRoutes = ["/", "/auth"]

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value
  const pathname = request.nextUrl.pathname

  const isPublic = publicRoutes.includes(pathname)

  if (!token && !isPublic) {
    return NextResponse.redirect(new URL("/auth", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
