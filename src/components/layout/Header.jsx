import React, { useState } from "react";
import ReactDOM from "react-dom";


import logo from "../../assets/images/logo.svg";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Overlay from "../UI/Overlay";
import styles from './Header.module.scss'
import Nav from "./Nav";
import Button from "../UI/Button";

const Header = () => {
    const [toggleNav, setToggleNav] = useState(false);
    const toggleNavHandler = () => {
        setToggleNav(prevState => !prevState);
    }
    return (
        <header className={styles.header}>
            <div className={styles[`header__img-wrapper`]}>
                <a href="#">
                    <img src={logo} alt="Company Logo" />
                </a>
            </div>
            {toggleNav && ReactDOM.createPortal(<Overlay toggle={toggleNavHandler} />, document.getElementById("overlay"))}
            {toggleNav && ReactDOM.createPortal(<Nav className={`header__nav`} data={['Home', 'About', 'Contact', 'Blog', 'Careers']} />, document.getElementById("nav"))}
            <nav className={styles["header__nav"]}>
                <ul className={styles["header__list"]}>
                    <li className={styles["header__item"]}><a href="#">Home</a></li>
                    <li className={styles["header__item"]}><a href="#">About</a></li>
                    <li className={styles["header__item"]}><a href="#">Contact</a></li>
                    <li className={styles["header__item"]}><a href="#">Blog</a></li>
                    <li className={styles["header__item"]}><a href="#">Careers</a></li>
                </ul>
                <Button type="button" className={'header__btn'}>Request Invite</Button>
            </nav>
            <button title="Menu" type="button" onClick={toggleNavHandler} className={styles[`header__menu-btn`]}>
                <FontAwesomeIcon icon={!toggleNav ? faBars : faClose} style={{ fontSize: `2rem` }} />
            </button>
        </header>
    );

}

export default Header;