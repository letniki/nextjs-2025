import React from 'react';
import {getCars} from "@/services/api.service";
import {CarComponent} from "@/components/car/CarComponent";

export const CarsComponent = async () => {
    const cars = await getCars();
    return (
        <div>
            {cars.map(car => <CarComponent key={car.id} car={car}></CarComponent>)}
        </div>
    );
};

