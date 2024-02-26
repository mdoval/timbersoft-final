export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/dashboard/:path*","/api/proveedores","/api/categorias","/api/destinos","/api/calidades","/api/destinos","/api/largos","/api/proveedores","/api/transportistas","/api/tipos","/mobile/cargapaquetes/cargar"],
}