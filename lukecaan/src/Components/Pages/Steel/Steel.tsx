import React from 'react';
import PageWrapper from '../../Utility/PageWrapper/PageWrapper';
import styles from "./Steel.module.scss"
import SteelWordMark from './SteelWordMark';

const Steel = () => {
    return (
        <PageWrapper
            className={styles.steel}
            id="steel"
        >
            <div className={styles.splitter}>
                <div className={styles.splitLeft}>
                    <SteelWordMark className={styles.wordmark} />
                    <div
                        className={styles.infoHolder}
                    >
                        <div className={styles.info}>
                            Dedicated secure SMS authentication mobile app
                        </div>
                        <div className={styles.info}>
                            End-to-end encrypted
                        </div>
                        <div className={styles.info}>
                            Immune to SIM-Hacking attempts
                        </div>
                        <div className={styles.info}>
                            Accessible internationally, even after losing your phone or it being stolen
                        </div>
                        <div className={`${styles.info} ${styles.small}`}>
                            (Currently unavailable)
                        </div>
                    </div>
                </div>
                <div className={styles.splitRight}>
                    <img
                        src="/SteelAppPreview.png"
                        className={styles.preview}
                        alt="steel app preview"
                    />
                </div>
            </div>

            <button>
                Next
            </button>
        </PageWrapper>
    );
};

export default Steel;