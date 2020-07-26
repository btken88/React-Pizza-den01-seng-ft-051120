import React, { useEffect, Fragment, useState } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
function App() {
  const [topping, setTopping] = useState("")
  const [size, setSize] = useState("Small")
  const [vegetarian, setVegetarian] = useState(null)
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/pizzas')
      .then(response => response.json())
      .then(setPizzas)
  }, [])

  const pizzaForm = [
    topping,
    setTopping,
    size,
    setSize,
    vegetarian,
    setVegetarian
  ]

  return (
    <Fragment>
      <Header />
      <PizzaForm pizzaForm={[...pizzaForm]} />
      <PizzaList pizzas={pizzas} />
    </Fragment>
  );
}

export default App;
