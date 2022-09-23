import React from 'react';

import styles from "./Nav.module.scss";

const Nav = (props) => {
    return (
        <nav className={`${styles["nav"]} ${styles[props.className] || ""}`}>
            <ul className={styles["nav__list"]}>
                <li className={styles["nav__item"]}><a href="#">About Us</a></li>
                <li className={styles["nav__item"]}><a href="#">Contact</a></li>
                <li className={styles["nav__item"]}><a href="#">Blog</a></li>
                <li className={styles["nav__item"]}><a href="#">Careers</a></li>
                <li className={styles["nav__item"]}><a href="#">Support</a></li>
                <li className={styles["nav__item"]}><a href="#">Privacy Policy</a></li>
            </ul>
        </nav>
    )
}

export default Nav;