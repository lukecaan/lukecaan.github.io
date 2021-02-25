import React, { PropsWithChildren, useState } from 'react';
import styles from "./Carousel.module.scss";
import { CarouselIndexButtons } from './CarouselTypes';

type Props = PropsWithChildren<{
    className?: string,
    slideClass?:string,
    Buttons: CarouselIndexButtons
}>

const Carousel = (props: Props) => {
    const [selectedChild, setSelectedChild] = useState(0);

    return (
        <div
            className={`${styles.carousel} ${props.className}`}
        >
            <div
                className={styles.gallery}
            >
                <div
                    className={styles.galleryContentWrapper}
                    style={{ left: `${selectedChild * 100 * -1}%` }}
                >
                    {React.Children.map(props.children, (child) => (
                        <div className={`${styles.child} ${props.slideClass??""}`}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            <div
                className={styles.indexButtonsHolder}
            >
                <props.Buttons
                    selectedIndex={selectedChild}
                    onChange={(newIndex) => setSelectedChild(newIndex)}
                />
            </div>
        </div>
    );
};

export default Carousel;