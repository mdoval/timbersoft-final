import { cookies } from 'next/headers'

export const getTipos = async () => {
    const url = `${process.env.siteUrl}/api/tipos`;
    const res = await fetch(url, 
      {
        cache: "no-store",
        headers: {
            Cookie: cookies().toString()        
        }
      });
    return res.json();
  };