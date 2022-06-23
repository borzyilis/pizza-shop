import React from 'react'
import styles from '../../styles/Admin.module.css'
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router'

const index = ({ orders, products }) => {

  const router = useRouter()

  const deleteById = async (id) => {
    try {
      await axios.delete("http://localhost:3000/api/products/" + id)
      alert("Pizza Deleted")
      router.reload()
     } catch (e) {
      console.log(e)
  }
};

  return (
    <div className={styles.container}>
      
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price (S, M, L)</th>
              <th>Action</th>
            </tr>
          </tbody>
          <tbody >
            {products.map(product =>
              <tr className={styles.trTitle} key={product._id}>
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{product._id}</td>
                <td>{product.title}</td>
                <td>{product.prices.map(price => <span key={price._id}>${price} </span>)}</td>
                <td>
                  <button className={styles.button} onClick={() => router.push(`admin/edit/${product._id}`)}>Edit</button>
                  <button className={styles.button} onClick={() => deleteById(product._id)}>Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
          <tbody >
            {orders.map(order =>
              <tr className={styles.trTitle} key={order._id + "c"}>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>{order.method === 1 ? <span>Cash</span> : <span>PayPal</span>}</td>
                <td>status</td>
                <td>
                  <button  >
                    Next Stage
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {

  const myCookie = ctx.req?.cookies || ""

  if (myCookie.token !== process.env.REACT_APP_TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false
      }
    }
  }
  else {
    const productsRes = await axios.get(`http://localhost:3000/api/products/ `)
    const ordersRes = await axios.get(`http://localhost:3000/api/orders/ `)
    return {
      props: {
        products: productsRes.data,
        orders: ordersRes.data
      }
    }
  }


}

export default index