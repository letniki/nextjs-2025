"use client"
import {useForm} from "react-hook-form";
import {ICar} from "@/models/ICar";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "@/validators/carValidator";
import {createCar} from "@/server-actions/ServerActions";

export const AddCarForm = () => {
const {handleSubmit, register, formState: {errors, isValid}} = useForm<ICar>({mode: 'all', resolver: joiResolver(carValidator)});

    const handler = async (data: ICar) => {
        try{
    await createCar(data);
        } catch (e){
    console.log(e);
        }
    }

    return (
        <form onSubmit={handleSubmit(handler)} >
            <div>brand:
                <input type="text" {...register('brand')}/>
                <div>{errors.brand?.message}</div>
            </div>
            <div>
                price: <input type="number" {...register('price')}/>
                <div>{errors.price?.message}</div>
            </div>
            <div>
                year: <input type="number" {...register('year')}/>
                <div>{errors.year?.message}</div>
            </div>
            <button disabled={!isValid}>Save car</button>
        </form>
    );
};

