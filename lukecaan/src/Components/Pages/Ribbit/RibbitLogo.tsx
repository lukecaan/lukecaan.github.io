import React from 'react';
import styles from "./RibbitLogo.module.scss";

const RibbitLogo = (props : {
    className?:string
    bounce?:boolean,
    small?:boolean,
    xsmall?:boolean,
}) => {

    return (
        <svg className={`${props.className ?? ""} ${styles.logo} ${props.bounce && styles.bounce} ${props.small && styles.small} ${props.xsmall && styles.xsmall}`} viewBox="0 0 262 225" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path d="M238.653 82.5093C245.324 97.3093 248.844 113.219 248.844 128.759C248.844 193.694 196.037 217.374 131 217.374C111.544 217.374 93.386 215.339 77.2658 210.714C57.625 204.979 41.1342 195.544 29.8315 181.484C21.8641 171.494 16.4907 159.099 14.2672 144.299C13.526 139.489 13.1554 134.309 13.1554 128.759C13.1554 113.219 16.676 97.3093 23.3464 82.5093C23.1611 82.3243 22.7905 82.1393 22.6052 82.1393C20.567 80.8443 18.5288 79.1793 16.4907 77.1443C2.40862 62.8993 -1.48247 36.9993 17.7877 17.7593C37.0578 -1.48074 62.9984 2.40426 77.0805 16.4643C79.8598 19.2393 81.898 22.0143 83.3803 24.7893C97.2771 19.0543 113.212 15.9093 131 15.9093C148.788 15.9093 164.537 19.0543 178.619 24.7893C180.102 22.0143 182.14 19.0543 184.919 16.4643C199.001 2.40426 224.942 -1.48074 244.212 17.7593C263.482 36.9993 259.591 62.8993 245.509 76.9593C243.286 79.1793 241.062 81.0293 238.653 82.5093Z" fill="#51E71D" />
                <path d="M231.427 178.524C231.427 179.819 231.427 181.114 231.427 182.409C210.675 207.199 173.431 217.189 131.185 217.189C111.73 217.189 93.5714 215.154 77.4511 210.529C58.3663 204.979 42.246 195.914 30.9434 182.409C30.9434 181.114 30.9434 179.819 30.9434 178.524C30.9434 132.089 67.4455 82.6943 131.185 82.6943C194.925 82.6943 231.427 132.089 231.427 178.524Z" fill="#CEF8C0" />
                <path d="M216.419 64.1947C226.345 64.1947 234.392 56.1604 234.392 46.2497C234.392 36.3389 226.345 28.3047 216.419 28.3047C206.492 28.3047 198.446 36.3389 198.446 46.2497C198.446 56.1604 206.492 64.1947 216.419 64.1947Z" fill="#0B4C1B" />
                <path d="M46.3225 66.2289C56.2488 66.2289 64.2956 58.1946 64.2956 48.2839C64.2956 38.3731 56.2488 30.3389 46.3225 30.3389C36.3962 30.3389 28.3494 38.3731 28.3494 48.2839C28.3494 58.1946 36.3962 66.2289 46.3225 66.2289Z" fill="#0B4C1B" />
                <path d="M68.3722 115.069C68.3722 134.309 52.8078 149.849 33.5377 149.849C26.4966 149.849 19.8262 147.814 14.2675 144.114C13.5263 139.304 13.1558 134.124 13.1558 128.574C13.1558 113.034 16.6763 97.1241 23.3467 82.3241C23.1614 82.1391 22.7908 81.9541 22.6055 81.9541C25.9408 80.8441 29.6466 80.2891 33.3524 80.2891C52.8078 80.2891 68.3722 95.8291 68.3722 115.069Z" fill="#00AE5F" />
                <path d="M193.072 115.069C193.072 134.309 208.636 149.849 227.907 149.849C234.948 149.849 241.618 147.814 247.177 144.114C247.918 139.304 248.288 134.124 248.288 128.574C248.288 113.034 244.768 97.1241 238.097 82.3241C238.283 82.1391 238.653 81.9541 238.839 81.9541C235.503 80.8441 231.798 80.2891 228.092 80.2891C208.636 80.2891 193.072 95.8291 193.072 115.069Z" fill="#00AE5F" />
                <path d="M131 222C110.433 222 91.9038 219.595 75.9689 215.155C54.29 208.865 37.6139 198.505 26.3112 184.445C17.6026 173.53 11.8586 160.21 9.63509 145.04C8.89393 139.86 8.52335 134.495 8.52335 128.76C8.52335 113.775 11.6733 98.4196 17.6026 84.1746C16.1202 83.0646 14.6379 81.7696 13.1556 80.2896C5.18813 72.3346 0.370596 61.0496 1.56898e-05 49.3946C-0.370564 36.6296 4.81756 24.2346 14.4526 14.4296C24.273 4.62463 36.6874 -0.370371 49.4724 -0.0003705C61.1457 0.36963 72.4484 5.17963 80.4159 13.1346C82.2688 14.9846 83.9364 17.0196 85.4187 19.0546C99.5007 14.0596 114.88 11.4696 131 11.4696C147.12 11.4696 162.499 14.0596 176.581 19.2396C178.064 17.2046 179.731 15.1696 181.584 13.1346C189.552 5.17963 200.854 0.36963 212.342 -0.0003705C225.127 -0.370371 237.542 4.80963 247.362 14.4296C268.3 35.3346 264.594 64.3796 248.659 80.2896C247.177 81.7696 245.88 83.0646 244.212 84.1746C250.141 98.4196 253.291 113.775 253.291 128.76C253.662 188.885 210.119 222 131 222ZM48.1754 9.24963C40.9491 9.24963 30.7581 11.4696 21.1231 21.0896C10.9321 31.2646 9.07922 41.9946 9.26451 49.2096C9.63509 58.4596 13.3409 67.3396 19.826 73.8146C21.4937 75.4796 23.3466 76.9596 25.1995 78.2546C25.3847 78.4396 25.57 78.4396 25.7553 78.6246C27.7935 79.9196 28.5347 82.3246 27.6082 84.5446C21.1231 98.6046 17.7879 113.96 17.7879 128.945C17.7879 134.125 18.1584 139.12 18.8996 143.745C20.9378 157.25 25.7553 169.09 33.5375 178.71C43.7285 191.29 58.9222 200.725 78.563 206.275C93.5715 210.715 111.359 212.75 131.185 212.75C165.464 212.75 192.702 206.275 211.972 193.695C233.465 179.635 244.397 157.805 244.397 128.945C244.397 113.96 241.062 98.6046 234.577 84.5446C233.651 82.3246 234.392 79.9196 236.43 78.6246C238.468 77.3296 240.506 75.8496 242.359 73.8146C258.48 57.7196 254.403 34.4096 241.062 21.0896C230.871 10.9146 220.125 9.06463 212.898 9.24963C203.634 9.61963 194.74 13.3196 188.255 19.7946C185.846 22.1996 183.993 24.6046 182.696 27.0096C181.584 29.0446 178.99 29.9696 176.767 29.2296C162.685 23.4946 147.306 20.7196 131 20.7196C114.695 20.7196 99.1301 23.4946 85.2334 29.2296C83.0099 30.1546 80.4159 29.2296 79.3041 27.0096C78.0071 24.4196 76.1542 22.0146 73.7454 19.7946C67.4456 13.3196 58.5516 9.61963 49.2871 9.24963C48.9166 9.24963 48.546 9.24963 48.1754 9.24963Z" fill="#0B4C1B" />
                <path d="M150.27 75.2939C144.526 77.5139 138.226 78.8089 131 78.8089C123.774 78.8089 117.289 77.5139 111.73 75.2939" stroke="#0B4C1B" strokeWidth="4.8715" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    );
};

export default RibbitLogo;