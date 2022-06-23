import React, { useEffect } from 'react'
import styles from '../styles/AddButton.module.css'
import { useState } from 'react'
import { useRouter } from "next/router"


const AddButton = () => {

    const router = useRouter()

    const [openPizzaCreator, setOpenPizzaCreator] = useState(false)
    const [openImageCreator, setOpenImageCreator] = useState(false)

    const [file, setFile] = useState(null);
    const [pictureUrl, setPictureUrl] = useState("https://res.cloudinary.com/dd5ok7eqp/image/upload/v1649764503/uploads/dg6blrotwejj2tj7gmke.png");

    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState([]);
    const [extraOptions, setExtraOptions] = useState([]);
    const [extra, setExtra] = useState(null);

    const changePrice = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices);
    };

    const handleExtraInput = (e) => {
        setExtra({ ...extra, [e.target.name]: e.target.value });
    };

    const handleExtra = () => {
        setExtraOptions((prev) => [...prev, extra]);
    };

    const getCookie = (cname) => {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    const createPicture = async () => {
        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "uploads")

        try {
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dd5ok7eqp/image/upload", data)
            console.log(uploadRes.data)
            alert(`Image was uploaded succesfully. It's available here :${uploadRes.data.url} `)
        } catch (e) {
            console.log(e)
        }
    }

    const createPizza = async () => {
        try {
            const newProduct = {
                title, desc, prices, extraOptions, img: pictureUrl
            }
            await axios.post("http://localhost:3000/api/products", newProduct)
            alert("New Pizza Created")
            setOpenPizzaCreator(false)
            router.reload(window.location.pathname)
        } catch (e) {
            console.log(e)
        }
    }



    return (
        <div>
            <button className={styles.mainAddButton} onClick={() => { setOpenPizzaCreator(true) }}>Add New Pizza</button>
            <button className={styles.mainAddButton} onClick={() => { setOpenImageCreator(true) }}>Add Pizza Picture</button>
            {openPizzaCreator &&
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <button className={styles.close} onClick={() => { setOpenPizzaCreator(false) }}>X</button>
                        <div className={styles.item}>
                            <label htmlFor="images" className={styles.label}>Choose an image</label>
                            <select id="images" onChange={(e) => setPictureUrl(e.target.value)}>
                                <option value="https://res.cloudinary.com/dd5ok7eqp/image/upload/v1649764503/uploads/dg6blrotwejj2tj7gmke.png">Margharita</option>
                                <option value="https://res.cloudinary.com/dd5ok7eqp/image/upload/v1649770393/uploads/sm7f7tryapk34dabjb6a.png">Margharita with leaves</option>
                                <option value="https://res.cloudinary.com/dd5ok7eqp/image/upload/v1649770385/uploads/e1nm7nborycjizmsn21e.jpg">Margaharita with leaves and tomatoes</option>
                            </select>
                        </div>
                        <div className={styles.item}>
                            <label className={styles.label}>Title</label>
                            <input
                                className={styles.input}
                                type="text"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className={styles.item}>
                            <label className={styles.label}>Desc</label>
                            <textarea
                                rows={4}
                                type="text"
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </div>
                        <div className={styles.item}>
                            <label className={styles.label}>Prices</label>
                            <div className={styles.priceContainer}>
                                <input
                                    className={`${styles.input} ${styles.inputSm}`}
                                    type="number"
                                    placeholder="Small"
                                    onChange={(e) => changePrice(e, 0)}
                                />
                                <input
                                    className={`${styles.input} ${styles.inputSm}`}
                                    type="number"
                                    placeholder="Medium"
                                    onChange={(e) => changePrice(e, 1)}
                                />
                                <input
                                    className={`${styles.input} ${styles.inputSm}`}
                                    type="number"
                                    placeholder="Large"
                                    onChange={(e) => changePrice(e, 2)}
                                />
                            </div>
                        </div>
                        <div className={styles.item}>
                            <label className={styles.label}>Extra</label>
                            <div className={styles.extra}>
                                <input
                                    className={`${styles.input} ${styles.inputSm}`}
                                    type="text"
                                    placeholder="Item"
                                    name="text"
                                    onChange={handleExtraInput}
                                />
                                <input
                                    className={`${styles.input} ${styles.inputSm}`}
                                    type="number"
                                    placeholder="Price"
                                    name="price"
                                    onChange={handleExtraInput}
                                />
                                <button className={styles.extraButton} onClick={handleExtra}>
                                    Add
                                </button>
                            </div>
                            <div className={styles.extraItems}>
                                {extraOptions.map((option) => (
                                    <span key={option._id} className={styles.extraItem}>
                                        {option.text}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <button className={styles.button} onClick={() => {
                            if (getCookie("token") === "") {
                                router.push("/login/admin")
                            } else {
                                createPizza()
                            }
                        }}>
                            Add New Pizza
                        </button>
                    </div>
                </div>
            }
            {openImageCreator &&
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <button className={styles.close} onClick={() => { setOpenImageCreator(false) }}>X</button>
                        <div className={styles.item}>
                            <label className={styles.label}>Choose an image</label>
                            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                        </div>
                        <button className={styles.button} onClick={() => {
                            if (getCookie("token") === "") {
                                router.push("/admin/login")
                            } else {
                                createPicture()
                            }
                        }}>
                            Create
                        </button>
                    </div>
                </div>
            }
        </div>

    )
}

export default AddButton