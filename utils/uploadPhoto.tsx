export const uploadPhoto = async (data: FormData | undefined) => {
    const url = `${process.env.siteUrl}/api/users/uploadphoto`;
    try {
        const res = await fetch(url, {
            method: 'POST',
            body: data
          })
      return res;
    } catch (error) {
      console.log("Error en Funcion")
    }
  };
  
  export default uploadPhoto;