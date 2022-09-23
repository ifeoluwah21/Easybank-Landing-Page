import React from 'react';

import classes from "./BlogPostSection.module.scss";

import descImg1 from "../../assets/images/image-currency.jpg";
import descImg2 from "../../assets/images/image-restaurant.jpg";
import descImg3 from "../../assets/images/image-plane.jpg";
import descImg4 from "../../assets/images/image-confetti.jpg";

const BlogPostSection = () => {
    return (
        <section className={classes["posts-section"]}>
            <h2>Latest Articles</h2>
            <article className={`${classes.post}`}>
                <div className={classes[`post__img-wrapper`]}>
                    <img src={descImg1} alt="Currency" />
                </div>
                <div className={classes["post__details"]}>
                    <p className={classes[`post__author`]}>
                        By Claire Robinson
                    </p>
                    <h3 className={classes[`post__title`]}>Receive money in any currency with no fees</h3>
                    <p className={classes[`post__body`]}>
                        The world is getting smaller and we're becoming more mobile.
                        So why should you be forced to only receive money in a single...
                    </p>
                </div>
            </article>
            <article className={`${classes.post}`}>
                <div className={classes[`post__img-wrapper`]}>
                    <img src={descImg2} alt="Restaurant" />
                </div>
                <div className={classes["post__details"]}>
                    <p className={classes[`post__author`]}>
                        By Wilson Hutton
                    </p>
                    <h3 className={classes[`post__title`]}>Treat yourself without worrying about money</h3>
                    <p className={classes[`post__body`]}>
                        Our simple budgeting feature allows you to seperate out your spending and
                        set realistic limits each month. That means you...
                    </p>
                </div>
            </article>
            <article className={`${classes.post}`}>
                <div className={classes[`post__img-wrapper`]}>
                    <img src={descImg3} alt="Plane" />
                </div>
                <div className={classes["post__details"]}>
                    <p className={classes[`post__author`]}>
                        By Wilson Hutton
                    </p>
                    <h3 className={classes[`post__title`]}>Take your Easybank card wherever you go</h3>
                    <p className={classes[`post__body`]}>
                        We want you to enjoy your travels. This is why we
                        don't charge any fees on purchases whiles you're abroad. We'll even show you...
                    </p>
                </div>
            </article>
            <article className={`${classes.post}`}>
                <div className={classes[`post__img-wrapper`]}>
                    <img src={descImg4} alt="Confetti" />
                </div>
                <div className={classes["post__details"]}>
                    <p className={classes[`post__author`]}>
                        By Claire Robinson
                    </p>
                    <h3 className={classes[`post__title`]}>Our invite -only Beta accounts are now live!</h3>
                    <p className={classes[`post__body`]}>
                        After a lot of hard work by the whole team, we're excited
                        to launch our closed beta. It's easy to request an invite through the site...
                    </p>
                </div>
            </article>
        </section>
    )
}

export default BlogPostSection