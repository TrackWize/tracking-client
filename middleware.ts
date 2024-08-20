import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const baseURL = new URL("/", request.url).toString();

  if (!request.cookies.get("token")) {
    return NextResponse.redirect(baseURL);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [],
};
