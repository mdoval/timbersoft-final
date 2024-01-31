import { IUser } from "@/types/tipos";

export const passwordChange = async (usuario: IUser | undefined) => {
    const url = `http://localhost:3000/api/users/passwordchange`;
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
      console.log("Error en Funcion password change")
    }
  };
  
  export default passwordChange;
  