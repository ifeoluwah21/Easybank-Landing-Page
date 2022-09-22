import React from "react";
import logo from "../../assets/images/logo.svg";
import styles from './Header.module.scss'
import MenuIcon from "../UI/MenuIcon";
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles[`header__img-wrapper`]}>
                <a href="#">
                    <img src={logo} alt="Company Logo" />
                </a>
            </div>
            <button className={styles[`header__menu-btn`]}>
                <MenuIcon></MenuIcon>
            </button>
        </header>
    );

}

export default Header;