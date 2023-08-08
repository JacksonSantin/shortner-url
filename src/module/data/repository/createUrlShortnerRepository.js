const createUrlShortnerRepository = (axios) => async (url) => {
  try {
    const response = await axios.post("", {
      url: url.url
    })

    return response?.data ?? {}
  } catch (error) {
    throw error
  }
}

export { createUrlShortnerRepository }