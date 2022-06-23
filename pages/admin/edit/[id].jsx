import React from 'react'
import styles from '../../../styles/Edit.module.css'
import axios from 'axios';
import { useState } from 'react';




const edit = ({ product }) => {


  const [title, setTitle] = useState(product.title);
  const [desc, setDesc] = useState(product.desc);
  const [prices, setPrices] = useState(product.prices);
  const [extraOptions, setExtraOptions] = useState(product.extraOptions);
  const [extra, setExtra] = useState(null);

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = async () => {
    setExtraOptions((prev) => [...prev, extra]);
  };

  const handleUpdate = async () => {
    try {
      const newProduct = {
        title, desc, prices, extraOptions, img: product.img
      }
      await axios.put("http://localhost:3000/api/products/" + product._id, newProduct)
      alert("Pizza Updated")
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Edit Pizza </h1>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
          <textarea
            rows={4}
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Prices</label>
          <div className={styles.priceContainer}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder={prices[0]}
              onChange={(e) => changePrice(e, 0)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder={prices[1]}
              onChange={(e) => changePrice(e, 1)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder={prices[2]}

              onChange={(e) => changePrice(e, 2)}
            />
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Extras</label>
          {extraOptions.map(extraOption =>
            <div className={styles.extra} key={extraOption._id}>
              <input
                className={`${styles.input} ${styles.inputSm}`}
                type="text"
                placeholder={extraOption.text}
                value={extraOption.text}
                name="text"
                onChange={(e) => handleExtraInput(e)}
              />
              <input
                className={`${styles.input} ${styles.inputSm}`}
                type="number"
                placeholder={extraOption.price}
                name="price"
                onChange={handleExtraInput}
              />

            </div>)}
            <button className={styles.extraButton} onClick={handleExtra}>
                Add
            </button>

          <div className={styles.extraItems}>
            {product.extraOptions.map((extraOption) => (
              <span key={extraOption._id} className={styles.extraItem} onClick={() => setExtra(extraOption.text)}>{extraOption.text}</span>
            ))}
          </div>
        </div>
        <button className={styles.addButton} onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  )
}



export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)
  return {
    props: {
      product: res.data
    }
  }
}

export default edit