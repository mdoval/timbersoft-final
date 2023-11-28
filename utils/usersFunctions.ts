import { IUser } from "@/types/tipos";

  export const addUser = async ( user: IUser): Promise<IUser> => {
    const nuevoUsuario:IUser = {name: user.name, email: user.email, aserraderoId: user.aserraderoId} 
    const newUser = await fetch(`${process.env.siteUrl}/api/users/add`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoUsuario),
      }
    );
    return newUser.json();
  };

  export const loginUser = async (user: IUser): Promise<IUser> => {
//    console.log(user)
//    user.aserraderoId = 1
//    console.log(user)
    const url = `${process.env.siteUrl}/api/users/${user.email}`
    const res = await fetch(url, {cache: 'no-store'})
    const usuario = await res.json()
    if(usuario.user == null) {
      user.aserraderoId = 1
      const nuevo = await addUser(user)
      console.log(nuevo)
    } else {
      console.log("Usuario existe en la BD")
    }
    return (user)  
  }