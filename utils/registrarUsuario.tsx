import { IUser } from "@/types/tipos";

export const registrarUsuario = async (usuario: IUser | undefined) => {
  const url = `http://localhost:3000/api/users/registro`;
  try {
    const res = await fetch(url, {
      method: "POST",
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

export default registrarUsuario;
