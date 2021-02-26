import React from 'react';
import PageWrapper from '../../Utility/PageWrapper/PageWrapper';
import styles from "./Intro.module.scss";
import IntroCarousel from './IntroCarousel';

const Intro = () => {
    return (
        <PageWrapper
            className={`${styles.introPage} snapScroll`}
        >
            <div
                className={styles.introMessage}
            >
                {/* <h1>
                        Introduction
                    </h1> */}

                <p>
                    Hi, Welcome to my Portfolio.
                    </p>
                <p>
                    If you're reading this and you are from <span className={styles.dapper}>Dapper Labs</span>, then I made this just for you. If you are not from <span className={styles.dapper}>Dapper Labs</span>, then I have clearly settled for applying with other companies. I'll never love you as much as <span className={styles.dapper}>Dapper Labs</span> but I think I'm still a great person to hire.
                    </p>
                <p>
                    I hope this portfolio can give you a brief but effective insight into my personality and skills. It features an abridged version of my CV, and a short overview of two of my personal projects.
                    </p>
            </div>

            <div className={`${styles.cvSection} snapScroll`}>
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