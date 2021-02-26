import React from 'react';
import styles from "./ScreenSizeWarning.module.scss";

const ScreenSizeWarning = () => {
    return (
        <div
            className={styles.warning}
        >
            <div
                className={styles.message}
            >
                Sorry, this portfolio only supports desktop-size devices at the moment.
            </div>
        </div>
    );
};

export default ScreenSizeWarning;