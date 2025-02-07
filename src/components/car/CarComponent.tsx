import {ICar} from "@/models/ICar";
import './CarComponent.css'
type Props ={
    car: ICar
}
export const CarComponent = ({car}:Props) => {
    return (
        <div className='div'>
            <h2>{car.id}. {car.brand} </h2>
            <h3>Year: {car.year} - Price: {car.price}</h3>
        </div>
    );
};

