import { cookies } from 'next/headers'

export const getAnchosPaquete = async () => {
    const url = `${process.env.siteUrl}/api/anchospaquete`;
    const res = await fetch(url, 
      {
        cache: "no-store",
        headers: {
            Cookie: cookies().toString()        
        }
      });
    return res.json();
  };