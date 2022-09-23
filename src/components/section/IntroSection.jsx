import React from 'react';

import Button from '../UI/Button';

import styles from "./IntroSection.module.scss";

import heroImg from "../../assets/images/image-mockups.png";

const IntroSection = () => {
    return (
        <section className={styles[`intro-section`]}>
            <div className={styles[`intro-section__illustration-wrapper`]}>
                <img src={heroImg}
                    alt='Mockup of the Easybank mobile application' />
            </div>
            <div className={styles[`intro-section__article`]}>
                <h1>Next generation digital banking</h1>
                <p>Take your financial life on lie. your Easybank account will
                    be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                </p>
                <Button className="intro" type='button'>Request Invite</Button>
            </div>
        </section>
    )
}

export default IntroSection