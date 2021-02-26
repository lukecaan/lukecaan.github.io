import React, { createRef, useRef } from 'react';
import Carousel from '../../Utility/PageWrapper/Carousel/Carousel';
import { CarouselIndexButtons } from '../../Utility/PageWrapper/Carousel/CarouselTypes';
import styles from "./IntroCarousel.module.scss";

const IntroCarouselIndexButtons = (props: { buttons: { label: string }[] }): CarouselIndexButtons => (innerProps) => {
    const indexDotRef = createRef<HTMLDivElement>();

    const handleButtonClick = (index:number) => {
        innerProps.onChange(index);

        // if already on the target index, run pop animation
        if (index === innerProps.selectedIndex) {
            indexDotRef.current!.classList.add(styles.pop);

            setTimeout(()=>{
                indexDotRef.current!.classList.remove(styles.pop);
            }, 70)
        }
    }

    return (
        <div>
            {props.buttons.map((button, index) => (
                <button
                    className={`${styles.carouselIndexButton} ${innerProps.selectedIndex === index && styles.selected}`}
                    onClick={() => handleButtonClick(index)}
                >
                    {button.label}
                </button>
            ))}

            <div 
                className={styles.indexDot}
                style={{left: `${30*innerProps.selectedIndex + 12}px`}}
                ref={indexDotRef}
            />
        </div>
    )
}

const IntroCarousel = () => {

    const buttonLabels = [
        { label: "1" },
        { label: "2" },
        { label: "3" },
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
                        24 months professionally responsible for my own greenfield project at Alkira. I approach problems using first principles (which is drilled into me from experience in undergrad physics).
                    </li>
                    <li
                    >
                        Excellent communication skills
                    </li>
                    <li
                        className={`${styles.indented} ${styles.minor}`}
                    >
                        Confident and good at communicating with peers and superiors. Experience working in an Apple retail store in sales where building rapport and asking the right questions is paramount.
                    </li>
                    <li
                    >
                        An entrepreneurial mindset
                    </li>
                    <li
                        className={`${styles.indented} ${styles.minor}`}
                    >
                        Infatuated with lean principles. I've always wanted to start my own successful business and I'm generally full of ideas for new products, features, and pivots.
                    </li>
                </ul>
            </div>
            
            <div
                className={styles.slide}
            >
                <h3>
                    Interests
                </h3>

                <ul>
                    <li
                    >
                        Blockchain Technology
                    </li>
                    <li
                        className={`${styles.indented} ${styles.minor}`}
                    >
                        I think that blockchain technology is one of the most promising movements in terms of improving quality of life across the globe. I would love to be a part of it.
                    </li>
                    <li>
                        Art
                    </li>
                    <li
                        className={`${styles.indented} ${styles.minor}`}
                    >
                        I've always loved art, romanticism is my favourite style, I find cathedrals the most awe-inspiring. I am inspired by artists, architects and craftsmen that have dedicated their lives to creating things which have no purpose but to bring beauty into the world. I have found the digital art NFT space to be fascinating.
                    </li>
                    <li>
                        Technical Challenges
                    </li>
                    <li
                        className={`${styles.indented} ${styles.minor}`}
                    >
                        Despite my heavy front-end professional experience, I do actually like to solve complex technical problems. Most of my favourite classes in university were the geeky ones like Algorithms &amp; Data Structures, Intro to AI, or low-level computing subjects where we did things like build tetris on a breadboard programmed in C. In most companies, where the domain isn't very complex, I generally prefer to create a beautiful user experience rather than develop a standard REST API, but I would love to work for a company where I can sink my teeth into a real problem.
                    </li>
                </ul>
            </div>

        </Carousel>
    );
};

export default IntroCarousel;