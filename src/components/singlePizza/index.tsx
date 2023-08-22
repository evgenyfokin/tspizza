import pizzaType from "../../models/PizzaType.ts";
import {FC, useState} from "react";
import styles from './SinglePizza.module.scss'
import {AiFillEdit, AiFillDelete} from "react-icons/ai"
import EditPizzaForm from "../editPizzaForm";

interface IPizza {
    pizza: pizzaType
    updatePizza: (newPizza: pizzaType) => void
    removePizza: (id: number) => void
}

const SinglePizza: FC<IPizza> = ({pizza, updatePizza, removePizza}) => {
    const [edit, setEdit] = useState(false)

    const editPizzaToggle = () => {
        setEdit(!edit)
    }

    const handleRemove = () => {
        removePizza(pizza.id)
    }

    return (
        <div className={styles.pizza}>
            <img src={`${pizza.img}`} alt={`${pizza.title}`}/>
            <h2>{pizza.title}</h2>
            <span>{pizza.price}</span>
            <div onClick={editPizzaToggle}>
                <AiFillEdit className={styles.icon} />
            </div>
            <div onClick={handleRemove}>
                <AiFillDelete className={styles.icon}/>
            </div>
            {edit && <EditPizzaForm editPizzaToggle={editPizzaToggle} updatePizza={updatePizza} data={pizza}/>}
        </div>
    )
}
export default SinglePizza