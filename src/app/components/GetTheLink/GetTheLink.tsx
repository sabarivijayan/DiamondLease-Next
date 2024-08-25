import React, { useEffect, useState } from 'react'
import styles from "./GetTheLink.module.css"

function GetTheLink() {
    //state to hold number
    const [number, setnumber] = useState<string>("")
    const [error, setError] = useState<string>("")

    const validateNumber = () => {
        if (number.length == 10 || number.length == 0) {
            setError("")
        }
        else {
            setError("Enter Valid Phone Number")
        }
    }

    useEffect(() => {
        validateNumber()
    }, [number])

    return (
        <div>
            <input
                className={styles.subscribePhoneInputMV}
                type="number"
                placeholder="Enter Phone Number"
                onChange={(e) => { setnumber(e.target.value) }}
            />
            <p className={styles.error}>{error}</p>
            <button className={styles.getLinkButton}>Get the link</button></div>
    )
}

export default GetTheLink