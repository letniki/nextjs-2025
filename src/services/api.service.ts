import axios from "axios";
import {ICar} from "@/models/ICar";

export const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1',
    headers:{}
})
export const getCars = async ():Promise<ICar[]> =>{
    const {data} = await axiosInstance.get<ICar[]>('/cars');
    return data;
}
export const addCar = async (car: ICar):Promise<ICar> =>{
    const {data} = await axiosInstance.post('/cars', car);
    return data;
}