import React, { Component } from 'react';
import Pizza from '../components/Pizza'
function PizzaList({ pizzas }) {
  const pizzaItems = pizzas.map(pizza => {
    return <Pizza {...pizza} />
  })


  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzaItems}
      </tbody>
    </table>
  );
}

export default PizzaList;
