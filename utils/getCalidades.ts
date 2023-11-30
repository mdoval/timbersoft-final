import { cookies } from 'next/headers'

export const getCalidades = async () => {
    const url = `${process.env.siteUrl}/api/calidades`;
    const res = await fetch(url, 
      {
        cache: "no-store",
        headers: {
            Cookie: cookies().toString()        
        }
      });
    return res.json();
  };