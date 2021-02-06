import React, { PropsWithChildren } from 'react';
import styles from "./PageWrapper.module.scss";

type Props = PropsWithChildren<{
    className?:string
    id?:string
}>

const PageWrapper = (props: Props) => {
    return (
        <div
            id={props.id??""}
            className={`${styles.pageWrapper} ${props.className}`}>
            {props.children}
        </div>
    );
};

export default PageWrapper;