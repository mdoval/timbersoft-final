import { cookies } from 'next/headers'

export const getEspesoresPaquete = async () => {
    const url = `${process.env.siteUrl}/api/espesorespaquete`;
    const res = await fetch(url, 
      {
        cache: "no-store",
        headers: {
            Cookie: cookies().toString()        
        }
      });
    return res.json();
  };