export const getAserraderoId = async (email: string | null | undefined) => {
    const url = `${process.env.siteUrl}/api/users/${email}`
    //console.log(url)
    const data = await fetch(url) 
    const res = await data.json()
    return res.user?.aserraderoId
}