import { cookies } from 'next/headers'

export const getUsers = async () => {
    const url = `${process.env.siteUrl}/api/users`;
    const res = await fetch(url, 
      {
        cache: "no-store",
        headers: {
            Cookie: cookies().toString()        
        }
      });
    return res.json();
  };