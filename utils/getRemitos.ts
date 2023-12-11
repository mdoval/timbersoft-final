import { cookies } from 'next/headers'

export const getRemitos = async () => {
    const url = `${process.env.siteUrl}/api/remitos`;
    const res = await fetch(url, 
      {
        cache: "no-store",
        headers: {
            Cookie: cookies().toString()        
        }
      });
    return res.json();
  };