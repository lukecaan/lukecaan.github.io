import React from 'react';
import PageWrapper from '../../Utility/PageWrapper/PageWrapper';
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <PageWrapper
            className={styles.home}
        >
            <div className={styles.titleHolder}>
                <h1>
                    Luke Steyn
                </h1>
                <span className={styles.volume}>
                    Vol. 1
                </span>
                <div
                    className={styles.caption}
                >
                    (a portfolio)
                </div>
            </div>


            <div className={styles.stripes}>
                <div className={styles.stripe}/>
                <div className={styles.stripe}/>
                <div className={styles.stripe}/>
            </div>

            {/* <button>
                Next
            </button> */}
        </PageWrapper>
    );
};

export default Home;