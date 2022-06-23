import React from 'react'
import Image from 'next/image'
import styles from '../styles/Slider.module.css'
import { useState } from 'react/cjs/react.development'

const Slider = () => {

  const [index, setIndex] = useState(0)

  const images = [
    "/img/featured1.jpg",
    "/img/featured2.jpg",
    "/img/featured3.jpg",
  ]

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : index = 2)
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : index = 0)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image className={styles.pizzaImage} src={img} alt="" layout="fill"></Image>
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("l")}>
        <Image src='/img/arrowl.png' alt="" layout='fill'></Image>
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow("r")}>
        <Image src='/img/arrowr.png' alt="" layout='fill'></Image>
      </div>
    </div>
  )
}

export default Slider