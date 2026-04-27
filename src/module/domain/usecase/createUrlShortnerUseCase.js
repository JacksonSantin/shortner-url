const createUrlShortnerUseCase = (repository) => async (url) => {
  try {
    return await repository(url)
  } catch (error) {
    throw error
  }
}

export { createUrlShortnerUseCase }