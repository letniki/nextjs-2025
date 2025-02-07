import Form from "next/form";
import {createCar} from "@/server-actions/ServerActions";

export const AddCarForm = () => {

    return (
        <Form action={createCar} >
            <div>brand:
               <input type="text" name='brand' />
            </div>
            <div>
                price: <input type="number" name='price' />
            </div>
            <div>
                year: <input type="number" name='year'/>
            </div>
            <button>Save car</button>
        </Form>
    );
};

