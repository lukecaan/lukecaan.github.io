import React from 'react';
import PageWrapper from '../../Utility/PageWrapper/PageWrapper';
import styles from "./Intro.module.scss";
import IntroCarousel from './IntroCarousel';

const Intro = () => {
    return (
        <PageWrapper
            className={`${styles.introPage} snapScrollTop`}
        >
            <div
                className={styles.introMessage}
            >
                <p>
                    Hi, Welcome to my Portfolio.
                </p>
                <p>
                    If you're reading this then I'm probably trying to convince you to hire me, so I hope this portfolio can give you a brief but effective insight into my personality and skills. It features an abridged version of my CV, and a short overview of two of my personal projects.
                </p>
            </div>

            <div className={`${styles.cvSection} snapScrollTop`}>
                <div className={styles.carouselTitle}>
                    <h1>Luke's (abridged) CV</h1>
                    <a
                        href="https://linkedin.com/in/lukecaan/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                        </a>
                </div>

                <IntroCarousel />
            </div>

        </PageWrapper>
    );
};

export default Intro;