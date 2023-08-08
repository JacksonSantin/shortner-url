import { axiosInstance } from "@/core/axios";
import { shortnerController } from "../controller/shortnerController"
import { createUrlShortnerRepository } from "../data/repository/createUrlShortnerRepository"
import { createUrlShortnerUseCase } from "../domain/usecase/createUrlShortnerUseCase"

const instance = axiosInstance
const createUrlShortnerRepositoryImpl = createUrlShortnerRepository(instance)
const createUrlShortnerUseCaseImpl = createUrlShortnerUseCase(createUrlShortnerRepositoryImpl)
const shortnerControllerImpl = shortnerController(createUrlShortnerUseCaseImpl)

export { shortnerControllerImpl }