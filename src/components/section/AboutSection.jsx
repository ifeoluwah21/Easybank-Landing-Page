import React from 'react';

import styles from "./AboutSection.module.scss";

import avatar1 from "../../assets/images/icon-online.svg";
import avatar2 from "../../assets/images/icon-budgeting.svg";
import avatar3 from "../../assets/images/icon-onboarding.svg";
import avatar4 from "../../assets/images/icon-api.svg";

const AboutSection = () => {
    return (
        <section className={styles["about-section"]}>
            <article className={styles["about-section__about"]}>
                <h2>Why choose Easybank?</h2>
                <p>
                    We leverage Open Banking to turn your bank account into
                    your financial hub. Control your financial like never before.
                </p>
            </article>
            <article className={styles.attr}>
                <div className={`${styles[`attr__avatar-wrapper`]}`}>
                    <img src={avatar1} alt="Online Banking logo" />
                </div>
                <div className={styles["attr__info"]}>
                    <h3>Online Banking</h3>
                    <p>
                        Our modern web and mobile applications allow you
                        to keep track of your finances wherever you are in the world.
                    </p>
                </div>
            </article>
            <article className={styles.attr}>
                <div className={`${styles[`attr__avatar-wrapper`]}`}>
                    <img src={avatar2} alt="Simple Budgeting logo" />
                </div>
                <div className={styles["attr__info"]}>
                    <h3>Simple Budgeting</h3>
                    <p>
                        See exactly where your money goes each month.
                        Receive notifications when you're close to your hitting limits.
                    </p>
                </div>
            </article>
            <article className={styles.attr}>
                <div className={`${styles[`attr__avatar-wrapper`]}`}>
                    <img src={avatar3} alt="Fast Onboading logo" />
                </div>
                <div className={styles["attr__info"]}>
                    <h3>Fast Onboarding</h3>
                    <p>
                        We don't do branches. Open your account in minutes online and strart
                        taking control of your finances right away.
                    </p>
                </div>
            </article>
            <article className={styles.attr}>
                <div className={`${styles[`attr__avatar-wrapper`]}`}>
                    <img src={avatar4} alt="Open API logo" />
                </div>
                <div className={styles["attr__info"]}>
                    <h3>Open API</h3>
                    <p>
                        Manage your savings, investments, pension, and much more from one account.
                        Tracking your money has never been easier
                    </p>
                </div>
            </article>
        </section>
    )
}

export default AboutSection;