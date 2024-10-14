import { useState, useEffect } from 'react'

import styles from './Message.module.css'

const Message = ({ type, msg }) => {

    const [visible, setVisible] = useState(false)

    useEffect(() => {

        if (!msg) {
            setVisible(false)
            return
        }

    }, [msg])
    return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
            )}
            
        </>
    )

}
export default Message;