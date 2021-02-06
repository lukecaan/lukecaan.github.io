import React from 'react';
import PageWrapper from '../../Utility/PageWrapper/PageWrapper';
import styles from "./Ribbit.module.scss";
import RibbitLogo from "./RibbitLogo";

const Ribbit = () => {
    return (
        <PageWrapper
            className={styles.ribbit}
        >
            <a
                href="https://ribbit.menu"
            >
                ribbit.menu
            </a>
            <div className={styles.splitter}>
                <div className={styles.splitLeft}>
                    <div className={styles.logoHolder}>
                        <RibbitLogo
                            className={styles.logo} />
                        <h1
                            className={styles.textLogo}
                        >
                            Ribbit
                        </h1>
                    </div>
                </div>
                <div className={styles.splitRight}>
                    <img
                        className={styles.mockup}
                        src="https://ribbit.menu/mockup.png"
                        alt="ribbit app preview"
                    />
                </div>
            </div>
        </PageWrapper>
    );
};

export default Ribbit;