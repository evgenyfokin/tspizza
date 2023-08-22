import styles from "./EditPizzaForm.module.scss"
import {ChangeEvent, FC, FormEvent, useState} from "react";
import PizzaType from "../../models/PizzaType.ts";
import pizzaType from "../../models/PizzaType.ts";

interface IEditPizzaForm {
    data: PizzaType
    updatePizza: (editPizza: pizzaType) => void
    editPizzaToggle: () => void
}

const EditPizzaForm: FC<IEditPizzaForm> = ({data, updatePizza, editPizzaToggle}) => {
    const [editPizza, setEditPizza] = useState<pizzaType>(data)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setEditPizza({
            ...editPizza,
            [name]: value
        })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const {title, price, img} = editPizza
        if (title && price && img) {
            updatePizza(editPizza)
            editPizzaToggle()
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.console}>
            <input
                name="title"
                type="text"
                placeholder="title"
                onChange={handleChange}
                value={editPizza.title}
            />
            <input
                onChange={handleChange}
                name="price"
                type="text"
                placeholder="price"
                value={editPizza.price}
            />
            <input
                onChange={handleChange}
                name="img"
                type="text"
                placeholder="image"
                value={editPizza.img}
            />
            <button
                type="submit"
            >Edit
            </button>
        </form>
    )
}

export default EditPizzaForm