import React from "react";
import styles from "./ClientFeedbackCarousel.module.scss";
import HorizontalLine from "./HorizontalLine";

const ClientFeedbackCarousel: React.FC = () => (
    <div className={styles.mainPageRow}>
        <div className={styles.clientsOpinion}>See what our clients say</div>
        <div className={styles.columnContainer}>
            <div id="slider" className={styles.slider}>
                <div className={styles.wrapper}>
                    <div id="slides" className={`${styles.slides}${styles.shifting}`}>
                        <div className={styles.slide}>
                            <blockquote className={`${styles.blockquote} ${styles.content}`}>
                                Probably the best API for making your business successful in trading derivatives out
                                there.
                            </blockquote>
                            <HorizontalLine />
                            <p className={styles.author}>
                                <b>Thiago</b>, entrepreneur | Brazil
                            </p>
                        </div>
                        <div className={styles.slide}>
                            <blockquote className={`${styles.blockquote} ${styles.content}`}>
                                I have been using the Deriv API for 13 years to build successful apps in and I find the
                                support I get from Deriv as a business partner second to none. I look forward to 13 more
                                successful years to come.
                            </blockquote>
                            <HorizontalLine />
                            <p className={styles.author}>
                                <b>Josh</b>, trader | Australia
                            </p>
                        </div>
                        <div className={styles.slide}>
                            <blockquote className={`${styles.blockquote} ${styles.content}`}>
                                To be honest, Deriv’s API is one of the best APIs in the trading market.
                            </blockquote>
                            <HorizontalLine />
                            <p className={styles.author}>
                                <b>Alessandro</b>, CEO | Italy
                            </p>
                        </div>
                    </div>
                </div>
                <a id="prev" className={`${styles.control} ${styles.prev}`}></a>
                <a id="next" className={`${styles.control} ${styles.next}`}></a>
            </div>
        </div>
    </div>
);

export default ClientFeedbackCarousel;
