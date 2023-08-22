import './App.css'
import AddPizzaForm from "./components/addPizzaForm";
import {useState} from "react";
import PizzaType from "./models/PizzaType.ts";
import DisplayPizza from "./components/displayPizza";

function App() {
    const savedPizzaList = localStorage.getItem('pizzaList')
    const initialPizzaList = savedPizzaList ? JSON.parse(savedPizzaList) : []
    const [pizzaList, setPizzaList] = useState<PizzaType[]>(initialPizzaList)

    const addPizza = (newPizza: PizzaType) => {
        const updatedPizzaList = [...pizzaList, newPizza]
        setPizzaList(updatedPizzaList)
        localStorage.setItem('pizzaList', JSON.stringify(updatedPizzaList))
    }

    const updatePizza = (newPizza: PizzaType) => {
        const updatedPizzaList = pizzaList.map(pizza => pizza.id === newPizza.id ? newPizza : pizza)
        setPizzaList(updatedPizzaList)
        localStorage.setItem('pizzaList', JSON.stringify(updatedPizzaList))
    }

    const removePizza = (id: number) => {
        const updatedPizzaList: PizzaType[] = pizzaList.filter(pizza => pizza.id !== id)
        setPizzaList(updatedPizzaList)
        localStorage.setItem('pizzaList', JSON.stringify(updatedPizzaList))
    }

    return (
        <>
            <h1>Pizza place</h1>
            <AddPizzaForm
                addPizza={addPizza}
            />
            <DisplayPizza pizzas={pizzaList} updatePizza={updatePizza} removePizza={removePizza}/>
        </>
    )
}

export default App
