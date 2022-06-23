import React from 'react'
import styles from '../../styles/Login.module.css'
import { useState} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'


const login = () => {

    const [input, setInput] = useState({username: null, password: null})
    const [error, setError] = useState(false)
    const router = useRouter()
    

    const handleClick = async () => {
        try {
            setError(false)
            console.log(input)
            await axios.post("http://localhost:3000/api/login", input)
            router.push("/admin")
        } catch (e) {
            setError(true);
            console.log(e)
        }
    }

    const update = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
        setError(false)
    }
 
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Admin Dashboard</h1>
                <input
                    placeholder="username"
                    className={styles.input}
                    name="username"
                    onChange={update}
                />
                <input
                    placeholder="password"
                    type="password"
                    name="password"
                    className={styles.input}
                    onChange={update}
                />
                <button onClick={handleClick} className={styles.button}>
                    Sign In
                </button>
                {error && <span className={styles.error}>Wrong Credentials!</span>}
            </div>
        </div>
    )
}

export default login