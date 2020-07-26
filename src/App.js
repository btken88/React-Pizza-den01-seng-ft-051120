import React, { Component, Fragment, useState } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
function App() {
  const [topping, setTopping] = useState("")
  const [size, setSize] = useState("Small")
  const [vegetarian, setVegetarian] = useState(null)
  const [nonVegetarian, setNonVegetarian] = useState(null)

  function changeVegetarianState(event) {
    setVegetarian(event.target.value)
    setNonVegetarian(null)
  }

  function changeNonVegetarianState(event) {
    setNonVegetarian(event.target.value)
    setVegetarian(null)
  }

  const pizzaForm = [
    topping,
    setTopping,
    size,
    setSize,
    vegetarian,
    nonVegetarian,
    changeVegetarianState,
    changeNonVegetarianState
  ]

  return (
    <Fragment>
      <Header />
      <PizzaForm pizzaForm={[...pizzaForm]} />
      <PizzaList />
    </Fragment>
  );
}

export default App;
