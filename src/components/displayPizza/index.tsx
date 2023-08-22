import pizzaType from "../../models/PizzaType.ts";
import {FC} from "react";
import SinglePizza from "../singlePizza";

interface IDisplayPizza {
    pizzas: pizzaType[]
    updatePizza: (newPizza: pizzaType) => void
    removePizza: (id: number) => void
}

const DisplayPizza: FC<IDisplayPizza> = ({pizzas, updatePizza, removePizza}) => {
    return (
        <div className="container ">
            {
                pizzas.map(pizza => <SinglePizza updatePizza={updatePizza} removePizza={removePizza} pizza={pizza} key={pizza.id}/>)
            }
        </div>
    )
}
export default DisplayPizza