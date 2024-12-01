//ミドルウェア→リクエストを出す前に処理を挟む役割
export { auth as middleware } from "@/auth"; //auth.tsのmiddlewareをmiddlewareとしてexport

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    "/",
  ],
};
