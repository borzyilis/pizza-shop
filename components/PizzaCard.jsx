import Image from 'next/image'
import React from 'react'
import styles from "../styles/PizzaCard.module.css"
import Link from "next/link"
import { useRouter } from 'next/router'

const PizzaCard = ({ id }) => {

  const router = useRouter()


  return (
    <div className={styles.container}>
      <Link href={`/product/${id}`}>
      <Image src={"/../public/img/pizza.png"} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>Pizza Margharita</h1>
      <p className={styles.price}>$15</p>
      <p className={styles.desc}>A very tasty pizza!</p>
    </div>
  )
}

export default PizzaCard