export const getUserToken = async (email:string) => {
    const url = `${process.env.siteUrl}/api/user/${email}`;
    const res = await fetch(url) 
    return res.json();
  };