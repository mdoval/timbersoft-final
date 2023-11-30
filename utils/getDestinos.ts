import { cookies } from 'next/headers'

export const getDestinos = async () => {
    const url = `${process.env.siteUrl}/api/destinos`;
    const res = await fetch(url, 
      {
        cache: "no-store",
        headers: {
            Cookie: cookies().toString()        
        }
      });
    return res.json();
  };