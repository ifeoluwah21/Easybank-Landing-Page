import React from 'react';

import styles from "./Footer.module.scss";

import logo from "../../assets/images/logo-white.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Button from '../UI/Button';
import Nav from './Nav';



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
          <li className={styles["footer__social-item"]}><a title="facebook" href="#"><FontAwesomeIcon icon={faFacebook} className={styles["footer__icon"]} /></a></li>
          <li className={styles["footer__social-item"]}><a title='youtube' href="#"><FontAwesomeIcon icon={faYoutube} className={styles["footer__icon"]} /></a></li>
          <li className={styles["footer__social-item"]}><a title='twitter' target={'_blank'} href="https://twitter.com/_ifeoluwaaa"><FontAwesomeIcon icon={faTwitter} className={styles["footer__icon"]} /></a></li>
          <li className={styles["footer__social-item"]}><a title='pinterest' href="#"><FontAwesomeIcon icon={faPinterest} className={styles["footer__icon"]} /></a></li>
          <li className={styles["footer__social-item"]}><a title='instagram' href="#"><FontAwesomeIcon icon={faInstagram} className={styles["footer__icon"]} /></a></li>
        </ul>
      </nav>
      <Nav className={`footer__nav`} data={["About Us", 'Contact', 'Blog', 'Careers', 'Support', 'Privacy Policy']} />
      <div className={`${styles["footer__btn"]}`}>
        <Button>Request Invite</Button>
      </div>
      <p className={styles["footer__copyright"]}>&copy; Easybank. All Rights Reserved</p>
    </footer>
  )
}

export default Footer;