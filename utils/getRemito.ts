import { cookies } from 'next/headers'

export const getRemito = async (remitoId: number | undefined) => {
    const url = `${process.env.siteUrl}/api/remitos/${remitoId}`;
    const res = await fetch(url, 
      {
        cache: "no-store",
        headers: {
            Cookie: cookies().toString()        
        }
      });
    return res.json();
  };