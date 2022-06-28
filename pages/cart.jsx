import React from 'react'
import styles from '../styles/Cart.module.css'
import Image from 'next/image'

import OrderDetails from '../components/OrderDetails';
import { useState } from 'react'

const Cart = () => {

  const [open, isOpen] = useState(false)
  const [cash, isCash] = useState(false)



  // This values are the props in the UI



  return (
    <div className={styles.container}>
    <div className={styles.left}>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </tbody>
        <tbody>
        <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src={"/../public/img/pizza.png"}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>Margharita</span>
              </td>
              <td>
                <span className={styles.price}>$15</span>
              </td>
              <td>
                <span className={styles.quantity}>1</span>
              </td>
              <td>
                <span className={styles.total}>
                  $15
                </span>
              </td>
            </tr>

        </tbody>
      </table>
    </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$15
          </div>
          {open ? (
            <div className={styles.paymentMethods}>
              <button className={styles.paymentButton} onClick={() => isCash(!cash)}>CASH ON DELIVERY</button>
            </div>
          ) : (
            <button className={styles.button} onClick={() => isOpen(true)}>CHECKOUT NOW!</button>
          )}
        </div>
      </div>
      {cash && <OrderDetails setState={isCash}/>}
    </div>
  )
}

export default Cart