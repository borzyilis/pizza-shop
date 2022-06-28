import styles from '../../styles/Product.module.css'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react/cjs/react.development'
import {useRouter} from 'next/router'



const Product = () => {
    const router = useRouter()

    const pizza={
        prices: [10, 15, 17]
    }


    const [price, setPrice] = useState(pizza.prices[0])
    const [size, setSize] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const changePrice = (number) => {
        setPrice(price + number)
    }

    const handleSize = (sizeIndex) => {
        const difference = pizza.prices[sizeIndex] - pizza.prices[size]
        setSize(sizeIndex)
        changePrice(difference)
    }

    const handleCLick = () => {
        router.push("/cart")
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={"/../public/img/pizza.png"} objectFit="contain" layout='fill' alt=""></Image>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}> Margharita</h1>
                <span className={styles.price}>{price}</span>
                <p className={styles.desc}>Our new tasty Margharita</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => handleSize(0)}>
                        <Image src="/img/size.png" layout="fill" alt=""></Image>
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(1)}>
                        <Image src="/img/size.png" layout="fill" alt=""></Image>
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(2)}>
                        <Image src="/img/size.png" layout="fill" alt=""></Image>
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" min="1" defaultValue={quantity} className={styles.quantity} onChange={(e) => setQuantity(e.target.value)}></input>
                    <button className={styles.button} onClick={() => handleCLick()}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product