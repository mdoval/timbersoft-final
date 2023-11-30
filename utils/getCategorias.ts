import { cookies } from 'next/headers'

export const getCategorias = async () => {
    const url = `${process.env.siteUrl}/api/categorias`;
    const res = await fetch(url, 
      {
        cache: "no-store",
        headers: {
            Cookie: cookies().toString()        
        }
      });
    return res.json();
  };