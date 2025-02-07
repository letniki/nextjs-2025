'use server'
import {addCar} from "@/services/api.service";

export const createCar = async(formData: FormData) =>{
        await addCar(formData);
}