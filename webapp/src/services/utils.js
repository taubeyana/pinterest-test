export const log =  console.log;
export const shortSiteLink = (link) => {
    const siteURL = new URL(link)
    return siteURL.host
}

export const truncateString = (str = '') => {
    return  str.length > 50 ? str.slice(0, 50) + '...' : str;
}