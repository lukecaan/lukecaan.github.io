import React from 'react';
import PageWrapper from '../../Utility/PageWrapper/PageWrapper';
import styles from "./Intro.module.scss";
import IntroCarousel from './IntroCarousel';

const Intro = () => {
    return (
        <PageWrapper
            className={styles.introPage}
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
                    If you're reading this and you are from <span className={styles.dapper}>Dapper Labs</span>, then I made this just for you. I hope this portfolio can give you a brief but effective insight into my personality and skills. It features an abridged version of my CV, and a short overview of two of my personal projects.
                </p>
            </div>

            <div>

                <div className={styles.carouselTitle}>
                    <h2>Luke's (abridged) CV</h2>
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

            {/* <h2>Luke's (abridged) CV</h2>

            <h3>Technical Skills and Experience</h3>

            <h4>Primary Skills</h4>
            <p>
                The majority of my professional experience was gained during the 30 Months I spent at Alkira, which is a small software startup in Queensland, Australia. Alkira. Alkira was the first job I got out of university, where I quickly earned the trust of the founder (and CTO) of the company, and was majorly influential in the pivot which helped to save the company just 6 months into my job. After a brief hiatus, when I moved to another city, I started to work at Alkira again for the following 24 months remotely. During these 24 months I was responsible for building my own greenfield project, a large single page React application.
            </p>

            <li>
                <ul>React: 2 Years Professional Experience</ul>
                <ul
                    className={styles.indent}
                >Including Redux, Redux-Thunk, React Hooks</ul>
                <ul>Typescript: 2 Years Professional Experience</ul>
                <ul>Sass: 2 Years Professional Experience</ul>
                <ul>UI Design: Figma (my preference), Adobe XD, Sketch</ul>
                <ul>Adobe Illustrator</ul>
            </li>


            <p>
                I also have experience in the following, from my own personal projects
            </p>

            <li>
                <ul>
                    Node.js
                </ul>
                <ul>
                    Firebase and Google Cloud
                </ul>
                <ul>
                    Flutter and Dart native mobile development
                </ul>
                <ul>
                    Encryption, Security (I'm naturally a security conscious person, I built my own end-to-end encryption system for one of my startup attempts)
                </ul>
            </li>

            <h3>
                Soft Skills
            </h3>

            <li>
                <ul
                    className={styles.major}
                >
                    Working knowledge and appreciation of design principles
                </ul>
                <ul
                    className={styles.minor}
                >
                    The official title of my University Degree is Bachlor of IT, majoring in "Software Design", which included all of the core CS classes, as well as things like Design Thinking, Graphic Design, and lots of courses where we had to build user-oriented software products from the ground up using design best practises.
                </ul>
                <ul
                    className={styles.major}
                >
                    A self-starter
                </ul>
                <ul className={styles.minor}>
                    As well as the past 24 months where I've essentially been in charge of my own greenfield project, I generally natrally fell into a leadership role in my university peer-groups as well. In my experience, I'm talented at making key decisions such as determining what order things need to be done, and what should be included in the MVP. I'm good at discovering requirements because I natually approach problems using first principles (probably from my previous experience as a physics undergrad, before I discovered software, where this is drilled into you).
                </ul>
                <ul
                    className={styles.major}
                >
                    Excellent communication skills
                </ul>
                <ul className={styles.minor}>
                    I was born with the gift of the gab. I'm confident and good at communicating with peers and superiors. While working at university I worked in an Apple retail store (in sales) where I had to help people determine whether particular Apple products might be suitable for them. This generally involved building rapport with people from all walks of life, and trying to understand what kind of person they were and what problems they faced to help them come to a conclusion. I've also been through enough high stress helping-strangers-recover-valuable-family-photos-while-also-being-seriously-under-the-pump-and-maintaining-my-composure to last a lifetime.
                </ul>
                <ul
                    className={styles.major}
                >
                    An entrepreneurial mindset
                </ul>
                <ul
                    className={styles.minor}
                >
                    I've always wanted to start my own successful business, and I'm full of ideas. As well as my own attempts at beginning a startup, I was always full of suggesstions that were well-regarded while working at Alkira. I'm reasonably confident I have billion-dollar ideas in my notes app on my iPhone which I hope to manifest once I get the resources.
                </ul>
            </li> */}

        </PageWrapper>
    );
};

export default Intro;