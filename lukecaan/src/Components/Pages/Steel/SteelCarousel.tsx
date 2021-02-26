import React from 'react';
import Carousel from '../../Utility/Carousel/Carousel';
import { CarouselIndexButtons } from '../../Utility/Carousel/CarouselTypes';
import styles from "./SteelCarousel.module.scss";

const SteelCarouselIndexButtons = (props: { buttons: { label: string }[] }): CarouselIndexButtons => (innerProps) => {
    const handleButtonClick = (index: number) => {
        innerProps.onChange(index);
    }

    return (
        <div>
            {props.buttons.map((button, index) => (
                <button
                    className={`${styles.carouselIndexButton} ${innerProps.selectedIndex === index ? styles.selected : styles.notSelected }`}
                    onClick={() => handleButtonClick(index)}
                >
                    {button.label}
                </button>
            ))}
        </div>
    )
}

const SteelCarousel = () => {

    const buttonLabels = [
        { label: "1" },
        { label: "2" },
        { label: "3" },
        { label: "4" },
    ]

    return (
        <Carousel
            Buttons={SteelCarouselIndexButtons({ buttons: buttonLabels })}
            className={styles.SteelCarousel}
            slideClass={styles.slide}
        >
                <img
                    src="/SteelAppPreview1.png"
                    className={styles.steelPic}
                    alt="steel app preview"
                />
                
                <img
                    src="/SteelAppPreview2.png"
                    className={styles.steelPic}
                    alt="steel app preview"
                />

                <img
                    src="/SteelAppPreview3.png"
                    className={styles.steelPic}
                    alt="steel app preview"
                />

                <img
                    src="/SteelAppPreview4.png"
                    className={styles.steelPic}
                    alt="steel app preview"
                />

        </Carousel>
    );
};

export default SteelCarousel;