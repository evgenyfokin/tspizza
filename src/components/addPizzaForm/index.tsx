import {ChangeEvent, FC, FormEvent, useState} from "react";
import PizzaType from "../../models/PizzaType.ts";

interface IAddPizzaForm {
    addPizza: (newPizza:PizzaType) => void
}

const initialPizza = {
    title: '',
    price: '',
    img: ''
}

const AddPizzaForm:FC<IAddPizzaForm> = ({addPizza}) => {
    const [newPizza, setNewPizza] = useState<{
        title: string
        price: string
        img: string
    }>(initialPizza)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setNewPizza({
            ...newPizza,
            [name]: value
        })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const {title, price, img} = newPizza
        if (title && price && img) {
            addPizza({
                title,
                price: Number(price),
                img,
                id: Date.now()
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                type="text"
                placeholder="title"
                onChange={handleChange}
                value={newPizza.title}
            />
            <input
                name="price"
                type="text"
                placeholder="price"
                onChange={handleChange}
                value={newPizza.price}
            />
            <input
                name="img"
                type="text"
                placeholder="image"
                onChange={handleChange}
                value={newPizza.img}
            />
            <button
                type="submit"
            >+ Add pizza</button>
        </form>
    )
}

export default AddPizzaForm