import { cookies } from 'next/headers'

export const getLargosPaquete = async () => {
    const url = `${process.env.siteUrl}/api/largospaquete`;
    const res = await fetch(url, 
      {
        cache: "no-store",
        headers: {
            Cookie: cookies().toString()        
        }
      });
    return res.json();
  };