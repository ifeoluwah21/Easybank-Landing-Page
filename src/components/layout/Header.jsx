import React, { useState } from "react";
import ReactDOM from "react-dom";


import logo from "../../assets/images/logo.svg";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Overlay from "../UI/Overlay";
import styles from './Header.module.scss'
import Nav from "./Nav";

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
            {toggleNav && <Nav className={`header__nav`} />}
            <button title="Menu" type="button" onClick={toggleNavHandler} className={styles[`header__menu-btn`]}>
                <FontAwesomeIcon icon={!toggleNav ? faBars : faClose} style={{ fontSize: `2rem` }} />
            </button>
        </header>
    );

}

export default Header;