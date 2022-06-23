import Image from 'next/image'
import React from 'react'
import styles from "../styles/PizzaCard.module.css"
import Link from "next/link"
import axios from 'axios'
import { useRouter } from 'next/router'

const PizzaCard = ({ pizza }) => {

  const router = useRouter()

  const deleteById = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/products/${id}`)
      alert("Pizza deleted")
      router.reload(window.location.pathname)
    } catch (e) {
      console.log(e)
      router.push("/admin/login")
    }

  }

  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`}>
        <Image src={pizza.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <p className={styles.price}>{pizza.prices[0]}</p>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  )
}

export default PizzaCard