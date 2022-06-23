import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import { useRouter } from "next/router"
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Navbar = () => {

    const router = useRouter()

    const quantity = useSelector(state => state.cart.quantity)

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="" width="32" height="32"></Image>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}> ORDER NOW!</div>
                    <div className={styles.text}> 012 345 678</div>
                </div>
            </div>

            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Home</li>
                    <li className={styles.listItem}>Products</li>
                    <h1 className={styles.listItem} onClick={() => {
                        router.push("/")
                    }}>Pizza Shop</h1>
                    <li className={styles.listItem}>Menu</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <Link href="/cart">
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image src="/img/cart.png" alt="" width="30px" height="30px"></Image>
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Navbar