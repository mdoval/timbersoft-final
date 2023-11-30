export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/dashboard/:path*","/api/proveedores","/api/categorias","/api/destinos"],
}