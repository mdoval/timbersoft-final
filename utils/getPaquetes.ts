import { cookies } from 'next/headers'

export const getPaquetes = async () => {
    const url = `${process.env.siteUrl}/api/paquetes`;
    const res = await fetch(url, 
      {
        cache: "no-store",
        headers: {
            Cookie: cookies().toString()        
        }
      });
    return res.json();
  };