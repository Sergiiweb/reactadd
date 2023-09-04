import {apiService} from "./apiService";
import {urls} from "../constants";

const carService = {
    getAll: () => apiService.get(urls.cars.base),
    create: (data) => apiService.post(urls.cars.base, data)
}

export {
    carService
}