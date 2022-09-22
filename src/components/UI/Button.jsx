import React from 'react';

import styles from "./Button.module.scss"

const Button = (props) => {
    console.log(props.className)
    return (
        <button className={`${styles.button} ${styles[props.className]}`} type={props.type || `button`}>{props.children}</button>
    )
}

export default Button