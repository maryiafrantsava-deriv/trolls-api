import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import styles from "./ClientFeedbackCarousel.module.scss";
import HorizontalLine from "./HorizontalLine";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ClientFeedbackCarousel: React.FC = () => (
    <>
        <div className={styles.clientsOpinion}>See what our clients say</div>
        <Carousel
            showThumbs={false}
            showIndicators={false}
            showArrows={true}
            showStatus={false}
            swipeable={true}
            infiniteLoop={true}
            emulateTouch={true}
            useKeyboardArrows={false}
            transitionTime={1000}
            axis="horizontal"
            className={styles.carouselWrapper}
            renderArrowNext={(clickHandler, hasNext) =>
                hasNext && (
                    <button className={`${styles.control} ${styles.next}`} onClick={clickHandler}>
                        <Image height="24px" src="/arrow_right.svg" alt="text" width="24px" />
                    </button>
                )
            }
            renderArrowPrev={(clickHandler, hasPrev) =>
                hasPrev && (
                    <button className={`${styles.control} ${styles.prev}`} onClick={clickHandler}>
                        <Image height="24px" src="/arrow_left.svg" alt="text" width="24px" />
                    </button>
                )
            }
        >
            <div className={styles.slide}>
                <div className={`${styles.blockquote} ${styles.content}`}>
                    Probably the best API for making your business successful in trading derivatives out there.
                </div>
                <HorizontalLine />
                <p className={styles.author}>
                    <b>Thiago</b>, entrepreneur | Brazil
                </p>
            </div>
            <div className={styles.slide}>
                <div className={`${styles.blockquote} ${styles.content}`}>
                    I have been using the Deriv API for 13 years to build successful apps in and I find the support I
                    get from Deriv as a business partner second to none. I look forward to 13 more successful years to
                    come.
                </div>
                <HorizontalLine />
                <p className={styles.author}>
                    <b>Josh</b>, trader | Australia
                </p>
            </div>
            <div className={styles.slide}>
                <div className={`${styles.blockquote} ${styles.content}`}>
                    To be honest, Deriv’s API is one of the best APIs in the trading market.
                </div>
                <HorizontalLine />
                <p className={styles.author}>
                    <b>Alessandro</b>, CEO | Italy
                </p>
            </div>
        </Carousel>
    </>
);

export default ClientFeedbackCarousel;
