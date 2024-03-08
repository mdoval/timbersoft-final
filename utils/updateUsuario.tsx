import { IUser } from "@/types/tipos";

export const updateUsuario = async (usuario: IUser | undefined) => {
    const url = `${process.env.siteUrl}/api/users/update`;
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      return res;
    } catch (error) {
      console.log("Error en Funcion")
    }
  };
  
  export default updateUsuario;
  