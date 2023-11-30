import { cookies } from 'next/headers'

export const getLargos = async () => {
    const url = `${process.env.siteUrl}/api/largos`;
    const res = await fetch(url, 
      {
        cache: "no-store",
        headers: {
            Cookie: cookies().toString()        
        }
      });
    return res.json();
  };