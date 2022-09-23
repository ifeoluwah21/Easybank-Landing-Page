import React from 'react';

import styles from "./Footer.module.scss";

import logo from "../../assets/images/logo-white.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Button from '../UI/Button';



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles[`footer__logo-wrapper`]}>
        <a href="#" title='Easybank'>
          <img src={logo} alt="Company Logo" />
        </a>
      </div>
      <nav aria-label='social navigation' className={styles["footer__social-nav"]}>
        <ul className={styles["footer__social-list"]}>
          <li className={styles["footer__social-item"]}><a href="#"><FontAwesomeIcon icon={faFacebook} className={styles["footer__icon"]} /></a></li>
          <li className={styles["footer__social-item"]}><a href="#"><FontAwesomeIcon icon={faYoutube} className={styles["footer__icon"]} /></a></li>
          <li className={styles["footer__social-item"]}><a href="#"><FontAwesomeIcon icon={faTwitter} className={styles["footer__icon"]} /></a></li>
          <li className={styles["footer__social-item"]}><a href="#"><FontAwesomeIcon icon={faPinterest} className={styles["footer__icon"]} /></a></li>
          <li className={styles["footer__social-item"]}><a href="#"><FontAwesomeIcon icon={faInstagram} className={styles["footer__icon"]} /></a></li>
        </ul>
      </nav>
      <nav className={styles["footer__nav"]}>
        <ul className={styles["footer__nav-list"]}>
          <li className={styles["footer__nav-item"]}><a href="#">About Us</a></li>
          <li className={styles["footer__nav-item"]}><a href="#">Contact</a></li>
          <li className={styles["footer__nav-item"]}><a href="#">Blog</a></li>
          <li className={styles["footer__nav-item"]}><a href="#">Careers</a></li>
          <li className={styles["footer__nav-item"]}><a href="#">Support</a></li>
          <li className={styles["footer__nav-item"]}><a href="#">Privacy Policy</a></li>
        </ul>
      </nav>
      <div>
        <Button>Request Invite</Button>
      </div>
      <p className={styles["footer__copyright"]}>&copy; Easybank. All Rights Reserved</p>
    </footer>
  )
}

export default Footer;