import { cookies } from 'next/headers'

export const getProveedores = async () => {
    const url = `${process.env.siteUrl}/api/proveedores`;
    const res = await fetch(url, 
      {
        cache: "no-store",
        headers: {
            Cookie: cookies().toString()        
        }
      });
    return res.json();
  };