export const getIdFromUrl = url => {
    const urlWithoutLastSlash = url.slice(0, -1)
    return urlWithoutLastSlash.slice(urlWithoutLastSlash.lastIndexOf('/') + 1)
}