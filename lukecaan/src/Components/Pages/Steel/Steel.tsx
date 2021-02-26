import React from 'react';
import PageWrapper from '../../Utility/PageWrapper/PageWrapper';
import styles from "./Steel.module.scss"
import SteelWordMark from './SteelWordMark';
import SteelCarousel from './SteelCarousel';

const Steel = () => {
    return (
        <PageWrapper
            className={`${styles.steel} snapScrollTop`}
            id="steel"
        >
            <div className={styles.splitter}>
                <div className={styles.splitLeft}>
                    <SteelWordMark className={styles.wordmark} />
                    <div
                        className={`${styles.infoHolder}`}
                    >
                        <h1 className="">The Product</h1>
                        
                        <div className={styles.info}>
                            Dedicated SMS authentication mobile app, uses a seperate secure SMS number for your two-factor authentication messages
                        </div>
                        <div className={styles.info}>
                            Completely encrypted using RSA encryption, only you can read your messages
                        </div>
                        <div className={styles.info}>
                            Immune to SIM-Hacking attempts
                        </div>
                        <div className={styles.info}>
                            Accessible internationally, even if you lose your phone
                        </div>

                        <h2>Description</h2>
                        <div>
                            This was my first attempt at a startup. I thought of it when I first got interested in cryptocurrencies, and realised there was a problem with SMS authentication, which lots of people still use, being really insecure due to SIM Hacking. I started building this app as a side-projecet, hoping it would be able to provide me some income. I completed the app and even release it the app store with subscribtions and billing enabled. It didn't get as much traction as I'd hoped so I canned it, but it was still a great learning experience, and I'm proud of the fact I built a working app that solved a genuine problem in the world - even if it's not a problem that enough people cared enough to pay for.
                        </div>
                    </div>

                </div>

                <div className={styles.splitRight}>
                    <SteelCarousel/>
                </div>
            </div>

            <div className={`${styles.bottomSnap} snapScrollBottom`} />

            {/* <button>
                Next
            </button> */}
        </PageWrapper>
    );
};

export default Steel;