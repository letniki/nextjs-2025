'use server'
import {addCar} from "@/services/api.service";
import {ICar} from "@/models/ICar";

export const createCar = async(formData: ICar) =>{
        await addCar(formData);
}