import { cookies } from 'next/headers'

export const getTransportistas = async () => {
    const url = `${process.env.siteUrl}/api/transportistas`;
    const res = await fetch(url, 
      {
        cache: "no-store",
        headers: {
            Cookie: cookies().toString()        
        }
      });
    return res.json();
  };