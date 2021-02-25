import React from 'react';
import Carousel from '../../Utility/PageWrapper/Carousel/Carousel';
import { CarouselIndexButtons } from '../../Utility/PageWrapper/Carousel/CarouselTypes';
import styles from "./IntroCarousel.module.scss";

const IntroCarouselIndexButtons = (props: { buttons: { label: string }[] }): CarouselIndexButtons => (innerProps) => {
    return (
        <div>
            {props.buttons.map((button, index) => (
                <button
                    className={`${styles.carouselIndexButton} ${innerProps.selectedIndex === index && styles.selected}`}
                    onClick={() => { innerProps.onChange(index) }}
                >
                    {button.label}
                </button>
            ))}
        </div>
    )
}

const IntroCarousel = () => {

    const buttonLabels = [
        { label: "1" },
        { label: "2" },
        // { label: "3" },
        // { label: "4" },
        // { label: "5" },
    ]

    return (
        <Carousel
            Buttons={IntroCarouselIndexButtons({ buttons: buttonLabels })}
            className={styles.introCarousel}
            slideClass={styles.carouselSlide}
        >
            <div
                className={styles.slide}
            >
                <h3>Technical Skills and Experience</h3>

                {/* <p>
                    The majority of my professional experience was gained during the 30 Months I spent at Alkira, which is a small software startup in Queensland, Australia. Alkira. Alkira was the first job I got out of university, where I quickly earned the trust of the founder (and CTO) of the company, and was majorly influential in the pivot which helped to save the company just 6 months into my job. After a brief hiatus, when I moved to another city, I started to work at Alkira again for the following 24 months remotely. During these 24 months I was responsible for building my own greenfield project, a large single page React application.
                </p> */}

                <div
                    className={styles.splitter}
                >
                    <div>
                        <h4>Professional Experience</h4>
                        <ul>
                            <li>
                                <span className={styles.skillName}>React</span> 2+ Years
                            </li>
                            <li
                                className={styles.indented}
                            >
                                Redux, Redux-Thunk, React Hooks
                            </li>
                            <li>
                                <span className={styles.skillName}>Typescript</span> 2+ Years
                            </li>
                            <li>
                                <span className={styles.skillName}>Sass</span> 2+ Years
                            </li>
                            <li>
                                <span className={styles.skillName}>UI Design</span> Figma, Adobe XD, Sketch
                            </li>
                            <li>
                                <span className={styles.skillName}>Adobe Illustrator</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4>Personal Experience</h4>
                        <ul>
                            <li>
                                <span className={styles.skillName}>Node.js</span>
                            </li>
                            <li>
                                <span className={styles.skillName}>Firebase / Google Cloud</span>
                            </li>
                            <li>
                                <span className={styles.skillName}>Flutter / Dart</span>
                            </li>
                            <li>
                                <span className={styles.skillName}>Encryption / Security</span>
                            </li>
                            <li
                                className={styles.indented}
                            >
                                Naturally security conscious. Rolled my own end-to-end encryption system for one of my startup attempts.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                className={styles.slide}
            >
                <h3>
                    Soft Skills
                </h3>

                <ul>
                    <li
                    >
                        Working knowledge and appreciation of design principles
                    </li>
                    <li
                        className={`${styles.indented} ${styles.minor}`}
                    >
                        Studied multiple design courses in University, including: Design Thinking, Graphic Design, Human-Computer Interaction, other miscellaneous courses which involve building projects from scratch with user experience and design principles as a priority.
                    </li>
                    <li
                    >
                        A self-starter
                    </li>
                    <li
                        className={`${styles.indented} ${styles.minor}`}
                    >
                        24 months professionally responsible for my own greenfield project at Alkira. I approach problems using first principles (which is drilled into me from experience in undergrad physics). Usually natually fall into a leadership role when in a group of peers.
                    </li>
                    <li
                    >
                        Excellent communication skills
                    </li>
                    <li
                        className={`${styles.indented} ${styles.minor}`}
                    >
                        Confident and good at communicating with peers and superiors. Experience working in an Apple retail store in sales where building rapport and asking the right questions to make a good suggestion to the customer is paramount.
                    </li>
                    <li
                    >
                        An entrepreneurial mindset
                    </li>
                    <li
                        className={`${styles.indented} ${styles.minor}`}
                    >
                        In love with lean principles. I've always wanted to start my own successful business, and I'm full of ideas. Generally full of ideas for features and pivots in academic and professional experience. My notes app has a $1.2T market cap.
                    </li>
                </ul>
            </div>

        </Carousel>
    );
};

export default IntroCarousel;