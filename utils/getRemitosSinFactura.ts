import { cookies } from 'next/headers'

export const getRemitosSinFactura = async () => {
    const url = `${process.env.siteUrl}/api/remitos/sinfactura`;
    const res = await fetch(url, 
      {
        cache: "no-store",
        headers: {
            Cookie: cookies().toString()        
        }
      });
    return res.json();
  };