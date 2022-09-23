import React from 'react';

import styles from "./Overlay.module.scss";

const Overlay = (props) => {
    return (
        <div onClick={props.toggle} className={styles.overlay}></div>
    )
}

export default Overlay;