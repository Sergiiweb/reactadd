import {ICar} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const carService = {
    getAll: () => apiService.get<ICar[]>(urls.cars.base),
    create: (data: ICar) => apiService.post<ICar>(urls.cars.base, data),
    updateById: (id: number, data: ICar) => apiService.put(urls.cars.byId(id), data),
    deleteById: (id: number) => apiService.delete(urls.cars.byId(id))
}

export {
    carService
}