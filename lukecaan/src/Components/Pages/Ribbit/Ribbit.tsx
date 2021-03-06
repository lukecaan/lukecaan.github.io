import React from 'react';
import PageWrapper from '../../Utility/PageWrapper/PageWrapper';
import styles from "./Ribbit.module.scss";
import RibbitLogo from "./RibbitLogo";

const Ribbit = () => {
    return (
        <PageWrapper
            className={`${styles.ribbit} snapScrollTop`}
        >
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

                    <a
                        href="https://ribbit.menu"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ribbit.menu
                    </a>

                    <h1>
                        The Product
                    </h1>
                    <div className={styles.info}>
                        An app purpose-built to help food trucks and similar businesses stay on top of their busy order queue and improve their customer experience
                    </div>
                    <div className={styles.info}>
                        Tracks the order queue, and keeps a running estimate of how long each order is going to take. The customer also receives a link via SMS to a public-facing web page where they can track view the running estimate for their order
                    </div>
                    <div className={styles.info}>
                        Allows the host to send an SMS alert to their customers when their food is ready
                    </div>
                    <div className={styles.info}>
                        Integrates with POS systems such as Square so that orders are automatically tracked in Ribbit when orders are taken in the host's preferred POS System
                    </div>
                    <div className={styles.info}>
                        Puts the type of software large fast food companies like McDonald's use in their kitchens in the hands of small food enterprises
                    </div>

                    <h1>
                        Description
                    </h1>
                    <div
                        className={styles.info}
                    >
                        Shortly after wrapping up with Steel and deciding I wanted to try create another product, my sister, who owns a food truck, told me about a product she couldn't find on the market which would benefit her business. She asked me if I could build it for her, and Ribbit was born. 
                         
                        <br /><br />After building an MVP to get my sister off the ground, I invested more time into polishing the interface, and added features to make it an easier experience for new users who wouldn't have close contact with myself like my sister did. I employed lean principles by only building features that were requested by my sister, and then repeated that with some early-stage adopters of the product.
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