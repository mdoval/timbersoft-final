export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/api/proveedores",
    "/api/categorias",
    "/api/destinos",
    "/api/calidades",
    "/api/destinos",
    "/api/largos",
    "/api/proveedores",
    "/api/transportistas",
    "/api/tipos",
    "/api/paquetes",
    "/api/anchospaquete",
    "/api/largospaquete",
    "/api/espesorespaquete",
    "/mobile/cargapaquetes/cargar",
  ],
};
