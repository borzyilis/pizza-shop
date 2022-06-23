import styles from "../styles/PizzaList.module.css"
import React from 'react'
import PizzaCard from "./PizzaCard"

const PizzaList = ({pizzaList}) => {


  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Our Pizzas</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu vehicula urna, vitae fringilla dui. Praesent dapibus ex sollicitudin, fringilla elit tincidunt, pellentesque lacus. Aliquam non volutpat enim. Nunc ultrices nec tortor sit amet iaculis. Morbi sed odio mattis, luctus lectus et, condimentum lorem. Sed nunc orci, sodales eu arcu quis, posuere consectetur nulla. Mauris sed nisl vitae neque pulvinar interdum. Suspendisse diam mi, commodo sed elementum ut, gravida quis purus. Etiam egestas erat quis urna auctor, et rutrum enim maximus. Nunc vel aliquam ligula, ut placerat mauris.</p>
        <div className={styles.wrapper}>
          
          {pizzaList && pizzaList.map(pizza => {
             return <PizzaCard key={pizza._id} pizza={pizza}></PizzaCard>
          })}
        </div>
    </div>
  )
}

export default PizzaList