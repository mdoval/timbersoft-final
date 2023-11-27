import { cookies } from 'next/headers'

export const getUserLogged = async () => {
    const url = `${process.env.siteUrl}/api/user/logged`;
    const res = await fetch(url, 
      {
        cache: "no-store",
        headers: {
            Cookie: cookies().toString()        
        }
      });
    return res.json();
  };