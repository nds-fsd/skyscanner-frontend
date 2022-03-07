import React from 'react';
import "./registerPage.css"
import RegisterForm from '../../components/registerForm/RegisterForm';

const RegisterPage = () => {

    return (
        <div className="register-container">
            <div className="register-form">
                <h2 className="register-title">Registra tu nueva cuenta</h2>
                <RegisterForm />
            </div>
            <div className="register-options">
                <h2 className="register-options-title">Otras opciones de registro</h2>
                <svg width="346" height="54" viewBox="0 0 346 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.845947 16C0.845947 10.3995 0.845947 7.59921 1.93588 5.46009C2.89462 3.57847 4.42442 2.04867 6.30604 1.08993C8.44516 0 11.2454 0 16.8459 0H329.846C335.446 0 338.247 0 340.386 1.08993C342.267 2.04867 343.797 3.57847 344.756 5.46009C345.846 7.59921 345.846 10.3995 345.846 16V38C345.846 43.6005 345.846 46.4008 344.756 48.5399C343.797 50.4215 342.267 51.9513 340.386 52.9101C338.247 54 335.446 54 329.846 54H16.846C11.2454 54 8.44516 54 6.30604 52.9101C4.42442 51.9513 2.89462 50.4215 1.93588 48.5399C0.845947 46.4008 0.845947 43.6005 0.845947 38V16Z" fill="#1877F2"/>
                    <g clipPath="url(#clip0_1_460)">
                    <rect width="24" height="24" transform="translate(15.8459 15)" fill="#1877F2"/>
                    <path d="M39.3459 27.0699C39.3459 20.7186 34.1972 15.5699 27.8459 15.5699C21.4947 15.5699 16.3459 20.7186 16.3459 27.0699C16.3459 32.8099 20.5513 37.5674 26.0491 38.4302V30.3941H23.1292V27.0699H26.0491V24.5363C26.0491 21.6541 27.7659 20.0621 30.3928 20.0621C31.651 20.0621 32.967 20.2867 32.967 20.2867V23.1168H31.5169C30.0883 23.1168 29.6428 24.0032 29.6428 24.9127V27.0699H32.8323L32.3224 30.3941H29.6428V38.4302C35.1406 37.5674 39.3459 32.8099 39.3459 27.0699Z" fill="white"/>
                    </g>
                    <path d="M55.7444 25.9199C55.7444 23.4069 56.4182 21.4701 57.7659 20.1094C58.9377 18.9245 60.4286 18.332 62.2385 18.332C64.6604 18.332 66.4312 19.1263 67.551 20.7148C68.1695 21.6068 68.5015 22.502 68.5471 23.4004H65.5393C65.344 22.7103 65.0933 22.1895 64.7874 21.8379C64.2405 21.2129 63.4299 20.9004 62.3557 20.9004C61.262 20.9004 60.3993 21.3431 59.7678 22.2285C59.1363 23.1074 58.8206 24.3542 58.8206 25.9688C58.8206 27.5833 59.1526 28.7943 59.8167 29.6016C60.4872 30.4023 61.3368 30.8027 62.3655 30.8027C63.4202 30.8027 64.2242 30.4577 64.7776 29.7676C65.0836 29.3965 65.3375 28.8398 65.5393 28.0977H68.5178C68.2574 29.6667 67.5901 30.9427 66.5159 31.9258C65.4482 32.9089 64.0777 33.4004 62.4045 33.4004C60.3342 33.4004 58.7066 32.7363 57.5217 31.4082C56.3368 30.0736 55.7444 28.2441 55.7444 25.9199ZM75.3733 31.0371C76.1871 31.0371 76.8121 30.7474 77.2483 30.168C77.6845 29.5885 77.9026 28.765 77.9026 27.6973C77.9026 26.6296 77.6845 25.8092 77.2483 25.2363C76.8121 24.6569 76.1871 24.3672 75.3733 24.3672C74.5595 24.3672 73.9312 24.6569 73.4885 25.2363C73.0523 25.8092 72.8342 26.6296 72.8342 27.6973C72.8342 28.765 73.0523 29.5885 73.4885 30.168C73.9312 30.7474 74.5595 31.0371 75.3733 31.0371ZM80.8225 27.6973C80.8225 29.2598 80.3733 30.5977 79.4749 31.7109C78.5764 32.8177 77.2125 33.3711 75.3831 33.3711C73.5536 33.3711 72.1897 32.8177 71.2913 31.7109C70.3928 30.5977 69.9436 29.2598 69.9436 27.6973C69.9436 26.1608 70.3928 24.8294 71.2913 23.7031C72.1897 22.5768 73.5536 22.0137 75.3831 22.0137C77.2125 22.0137 78.5764 22.5768 79.4749 23.7031C80.3733 24.8294 80.8225 26.1608 80.8225 27.6973ZM88.7229 22.1016C89.8232 22.1016 90.7216 22.3913 91.4182 22.9707C92.1213 23.5436 92.4729 24.4974 92.4729 25.832V33H89.6213V26.5254C89.6213 25.9655 89.5465 25.5358 89.3967 25.2363C89.1233 24.6895 88.6025 24.416 87.8342 24.416C86.8902 24.416 86.2424 24.8164 85.8909 25.6172C85.7086 26.0404 85.6174 26.5807 85.6174 27.2383V33H82.844V22.375H85.5295V23.9277C85.8876 23.3809 86.2262 22.987 86.5452 22.7461C87.1181 22.3164 87.844 22.1016 88.7229 22.1016ZM93.9573 24.4355V22.4531H95.4417V19.4844H98.1956V22.4531H99.9241V24.4355H98.1956V30.0605C98.1956 30.4967 98.2509 30.7702 98.3616 30.8809C98.4722 30.985 98.8108 31.0371 99.3772 31.0371C99.4618 31.0371 99.5497 31.0371 99.6409 31.0371C99.7385 31.0306 99.8329 31.0241 99.9241 31.0176V33.0977L98.6057 33.1465C97.2906 33.1921 96.3922 32.9642 95.9104 32.4629C95.5979 32.1439 95.4417 31.6523 95.4417 30.9883V24.4355H93.9573ZM104.573 21.0859H101.75V18.5176H104.573V21.0859ZM101.75 22.3555H104.573V33H101.75V22.3555ZM113.176 22.1016C114.276 22.1016 115.175 22.3913 115.871 22.9707C116.574 23.5436 116.926 24.4974 116.926 25.832V33H114.074V26.5254C114.074 25.9655 114 25.5358 113.85 25.2363C113.576 24.6895 113.056 24.416 112.287 24.416C111.343 24.416 110.696 24.8164 110.344 25.6172C110.162 26.0404 110.071 26.5807 110.071 27.2383V33H107.297V22.375H109.983V23.9277C110.341 23.3809 110.679 22.987 110.998 22.7461C111.571 22.3164 112.297 22.1016 113.176 22.1016ZM122.278 22.3555V28.7715C122.278 29.377 122.349 29.8327 122.492 30.1387C122.746 30.679 123.244 30.9492 123.987 30.9492C124.937 30.9492 125.588 30.5651 125.94 29.7969C126.122 29.3802 126.213 28.8301 126.213 28.1465V22.3555H129.035V33H126.33V31.4961C126.304 31.5286 126.239 31.6263 126.135 31.7891C126.031 31.9518 125.907 32.0951 125.764 32.2188C125.328 32.6094 124.905 32.8763 124.494 33.0195C124.091 33.1628 123.615 33.2344 123.069 33.2344C121.493 33.2344 120.432 32.668 119.885 31.5352C119.579 30.9102 119.426 29.9889 119.426 28.7715V22.3555H122.278ZM135.93 24.3672C135.285 24.3672 134.784 24.569 134.426 24.9727C134.074 25.3763 133.853 25.9232 133.762 26.6133H138.088C138.043 25.8776 137.818 25.321 137.414 24.9434C137.017 24.5592 136.522 24.3672 135.93 24.3672ZM135.93 22.0723C136.815 22.0723 137.613 22.2383 138.323 22.5703C139.032 22.9023 139.618 23.4264 140.08 24.1426C140.497 24.7741 140.767 25.5065 140.891 26.3398C140.962 26.8281 140.992 27.5312 140.979 28.4492H133.694C133.733 29.5169 134.068 30.2656 134.699 30.6953C135.084 30.9622 135.546 31.0957 136.086 31.0957C136.659 31.0957 137.125 30.9329 137.483 30.6074C137.678 30.4316 137.851 30.1875 138 29.875H140.842C140.77 30.5065 140.442 31.1478 139.856 31.7988C138.944 32.834 137.668 33.3516 136.028 33.3516C134.673 33.3516 133.479 32.9154 132.444 32.043C131.408 31.1706 130.891 29.7513 130.891 27.7852C130.891 25.9427 131.356 24.5299 132.287 23.5469C133.225 22.5638 134.439 22.0723 135.93 22.0723ZM153.449 22.3555H156.272L157.893 30.0215L159.553 22.3555H162.453L159.367 33H156.506L154.836 25.2461L153.147 33H150.256L147.268 22.3555H150.256L151.916 29.9922L153.449 22.3555ZM166.858 21.0859H164.035V18.5176H166.858V21.0859ZM164.035 22.3555H166.858V33H164.035V22.3555ZM168.469 24.4355V22.4531H169.953V19.4844H172.707V22.4531H174.436V24.4355H172.707V30.0605C172.707 30.4967 172.763 30.7702 172.873 30.8809C172.984 30.985 173.323 31.0371 173.889 31.0371C173.974 31.0371 174.061 31.0371 174.153 31.0371C174.25 31.0306 174.345 31.0241 174.436 31.0176V33.0977L173.117 33.1465C171.802 33.1921 170.904 32.9642 170.422 32.4629C170.11 32.1439 169.953 31.6523 169.953 30.9883V24.4355H168.469ZM182.092 22.082C182.75 22.082 183.345 22.196 183.879 22.4238C184.42 22.6517 184.862 23 185.207 23.4688C185.5 23.8659 185.679 24.276 185.744 24.6992C185.809 25.1159 185.842 25.7995 185.842 26.75V33H183V26.5254C183 25.9525 182.903 25.4902 182.707 25.1387C182.453 24.6439 181.972 24.3965 181.262 24.3965C180.526 24.3965 179.966 24.6439 179.582 25.1387C179.205 25.627 179.016 26.3268 179.016 27.2383V33H176.242V18.6543H179.016V23.7422C179.42 23.1237 179.885 22.694 180.412 22.4531C180.946 22.2057 181.506 22.082 182.092 22.082ZM194.24 18.625H204.446V21.1543H197.229V24.4648H203.547V26.9648H197.229V33H194.24V18.625ZM212.112 27.8242C211.936 27.9349 211.757 28.026 211.574 28.0977C211.399 28.1628 211.155 28.2246 210.842 28.2832L210.217 28.4004C209.631 28.5046 209.211 28.6315 208.957 28.7812C208.528 29.0352 208.313 29.429 208.313 29.9629C208.313 30.4382 208.443 30.7832 208.703 30.998C208.97 31.2064 209.293 31.3105 209.67 31.3105C210.269 31.3105 210.819 31.1348 211.321 30.7832C211.828 30.4316 212.092 29.7904 212.112 28.8594V27.8242ZM210.422 26.5254C210.936 26.4603 211.304 26.3789 211.526 26.2812C211.923 26.112 212.121 25.8483 212.121 25.4902C212.121 25.054 211.968 24.7546 211.662 24.5918C211.363 24.4225 210.92 24.3379 210.334 24.3379C209.677 24.3379 209.211 24.5007 208.938 24.8262C208.742 25.0671 208.612 25.3926 208.547 25.8027H205.862C205.92 24.8717 206.181 24.1068 206.643 23.5078C207.378 22.5703 208.642 22.1016 210.432 22.1016C211.597 22.1016 212.632 22.3327 213.537 22.7949C214.442 23.2572 214.895 24.1296 214.895 25.4121V30.2949C214.895 30.6335 214.901 31.0436 214.914 31.5254C214.934 31.89 214.989 32.1374 215.08 32.2676C215.171 32.3978 215.308 32.5052 215.49 32.5898V33H212.463C212.378 32.7852 212.32 32.5833 212.287 32.3945C212.255 32.2057 212.229 31.9909 212.209 31.75C211.825 32.1667 211.382 32.5215 210.881 32.8145C210.282 33.1595 209.605 33.332 208.85 33.332C207.886 33.332 207.089 33.0586 206.457 32.5117C205.832 31.9583 205.52 31.1771 205.52 30.168C205.52 28.8594 206.024 27.9121 207.033 27.3262C207.587 27.0072 208.401 26.7793 209.475 26.6426L210.422 26.5254ZM223.733 26.1738C223.681 25.7767 223.547 25.4186 223.332 25.0996C223.02 24.6699 222.535 24.4551 221.877 24.4551C220.94 24.4551 220.298 24.9206 219.953 25.8516C219.771 26.3464 219.68 27.0039 219.68 27.8242C219.68 28.6055 219.771 29.2337 219.953 29.709C220.285 30.5944 220.91 31.0371 221.828 31.0371C222.479 31.0371 222.942 30.8613 223.215 30.5098C223.489 30.1582 223.655 29.7025 223.713 29.1426H226.555C226.49 29.9889 226.184 30.7897 225.637 31.5449C224.765 32.7624 223.472 33.3711 221.76 33.3711C220.048 33.3711 218.788 32.8633 217.981 31.8477C217.173 30.832 216.77 29.5137 216.77 27.8926C216.77 26.0632 217.216 24.6406 218.108 23.625C219 22.6094 220.23 22.1016 221.799 22.1016C223.134 22.1016 224.224 22.401 225.071 23C225.923 23.599 226.428 24.6569 226.584 26.1738H223.733ZM232.707 24.3672C232.063 24.3672 231.561 24.569 231.203 24.9727C230.852 25.3763 230.63 25.9232 230.539 26.6133H234.865C234.82 25.8776 234.595 25.321 234.192 24.9434C233.795 24.5592 233.3 24.3672 232.707 24.3672ZM232.707 22.0723C233.593 22.0723 234.39 22.2383 235.1 22.5703C235.809 22.9023 236.395 23.4264 236.858 24.1426C237.274 24.7741 237.545 25.5065 237.668 26.3398C237.74 26.8281 237.769 27.5312 237.756 28.4492H230.471C230.51 29.5169 230.845 30.2656 231.477 30.6953C231.861 30.9622 232.323 31.0957 232.864 31.0957C233.436 31.0957 233.902 30.9329 234.26 30.6074C234.455 30.4316 234.628 30.1875 234.778 29.875H237.619C237.548 30.5065 237.219 31.1478 236.633 31.7988C235.722 32.834 234.446 33.3516 232.805 33.3516C231.451 33.3516 230.256 32.9154 229.221 32.043C228.186 31.1706 227.668 29.7513 227.668 27.7852C227.668 25.9427 228.134 24.5299 229.065 23.5469C230.002 22.5638 231.216 22.0723 232.707 22.0723ZM245.393 22.1211C246.793 22.1211 247.886 22.6257 248.674 23.6348C249.468 24.6439 249.865 25.946 249.865 27.541C249.865 29.1947 249.475 30.5651 248.694 31.6523C247.912 32.7396 246.822 33.2832 245.422 33.2832C244.543 33.2832 243.837 33.1074 243.303 32.7559C242.984 32.5475 242.639 32.1829 242.268 31.6621V33H239.543V18.625H242.317V23.7422C242.668 23.2474 243.056 22.8698 243.479 22.6094C243.98 22.2839 244.618 22.1211 245.393 22.1211ZM244.68 30.9883C245.396 30.9883 245.953 30.6986 246.35 30.1191C246.747 29.5397 246.946 28.778 246.946 27.834C246.946 27.0788 246.848 26.4538 246.653 25.959C246.281 25.0215 245.598 24.5527 244.602 24.5527C243.593 24.5527 242.899 25.0117 242.522 25.9297C242.326 26.418 242.229 27.0495 242.229 27.8242C242.229 28.7357 242.431 29.4909 242.834 30.0898C243.238 30.6888 243.853 30.9883 244.68 30.9883ZM256.643 31.0371C257.457 31.0371 258.082 30.7474 258.518 30.168C258.954 29.5885 259.172 28.765 259.172 27.6973C259.172 26.6296 258.954 25.8092 258.518 25.2363C258.082 24.6569 257.457 24.3672 256.643 24.3672C255.829 24.3672 255.201 24.6569 254.758 25.2363C254.322 25.8092 254.104 26.6296 254.104 27.6973C254.104 28.765 254.322 29.5885 254.758 30.168C255.201 30.7474 255.829 31.0371 256.643 31.0371ZM262.092 27.6973C262.092 29.2598 261.643 30.5977 260.744 31.7109C259.846 32.8177 258.482 33.3711 256.653 33.3711C254.823 33.3711 253.459 32.8177 252.561 31.7109C251.662 30.5977 251.213 29.2598 251.213 27.6973C251.213 26.1608 251.662 24.8294 252.561 23.7031C253.459 22.5768 254.823 22.0137 256.653 22.0137C258.482 22.0137 259.846 22.5768 260.744 23.7031C261.643 24.8294 262.092 26.1608 262.092 27.6973ZM268.869 31.0371C269.683 31.0371 270.308 30.7474 270.744 30.168C271.181 29.5885 271.399 28.765 271.399 27.6973C271.399 26.6296 271.181 25.8092 270.744 25.2363C270.308 24.6569 269.683 24.3672 268.869 24.3672C268.056 24.3672 267.427 24.6569 266.985 25.2363C266.548 25.8092 266.33 26.6296 266.33 27.6973C266.33 28.765 266.548 29.5885 266.985 30.168C267.427 30.7474 268.056 31.0371 268.869 31.0371ZM274.319 27.6973C274.319 29.2598 273.869 30.5977 272.971 31.7109C272.073 32.8177 270.709 33.3711 268.879 33.3711C267.05 33.3711 265.686 32.8177 264.787 31.7109C263.889 30.5977 263.44 29.2598 263.44 27.6973C263.44 26.1608 263.889 24.8294 264.787 23.7031C265.686 22.5768 267.05 22.0137 268.879 22.0137C270.709 22.0137 272.073 22.5768 272.971 23.7031C273.869 24.8294 274.319 26.1608 274.319 27.6973ZM276.291 18.6543H279.026V26.4082L282.492 22.4043H285.94L282.219 26.4766L286.086 33H282.727L280.178 28.4492L279.026 29.6504V33H276.291V18.6543Z" fill="white"/>
                    <defs>
                    <clipPath id="clip0_1_460">
                    <rect width="24" height="24" fill="white" transform="translate(15.8459 15)"/>
                    </clipPath>
                    </defs>
                </svg>
                <svg width="352" height="62" viewBox="0 0 352 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_dd_1_461)">
                    <path d="M3.84595 23C3.84595 13.5719 3.84595 8.85786 6.77488 5.92893C9.70381 3 14.4179 3 23.8459 3H328.846C338.274 3 342.988 3 345.917 5.92893C348.846 8.85786 348.846 13.5719 348.846 23V37C348.846 46.4281 348.846 51.1421 345.917 54.0711C342.988 57 338.274 57 328.846 57H23.8459C14.4179 57 9.70381 57 6.77488 54.0711C3.84595 51.1421 3.84595 46.4281 3.84595 37V23Z" fill="white"/>
                    <rect width="24" height="24" transform="translate(18.8459 18)" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M41.8859 30.2614C41.8859 29.4459 41.8128 28.6618 41.6769 27.9091H30.8459V32.3575H37.035C36.7684 33.795 35.9582 35.013 34.7403 35.8284V38.7139H38.4569C40.6314 36.7118 41.8859 33.7637 41.8859 30.2614Z" fill="#4285F4"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M30.8459 41.4998C33.9509 41.4998 36.5541 40.47 38.4568 38.7137L34.7402 35.8282C33.7105 36.5182 32.3932 36.9259 30.8459 36.9259C27.8507 36.9259 25.3155 34.903 24.4111 32.1848H20.5691V35.1644C22.4614 38.9228 26.3505 41.4998 30.8459 41.4998Z" fill="#34A853"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M24.4112 32.1851C24.1812 31.4951 24.0505 30.758 24.0505 30.0001C24.0505 29.2421 24.1812 28.5051 24.4112 27.8151V24.8355H20.5691C19.7903 26.388 19.3459 28.1444 19.3459 30.0001C19.3459 31.8557 19.7903 33.6121 20.5691 35.1646L24.4112 32.1851Z" fill="#FBBC05"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M30.8459 23.0739C32.5343 23.0739 34.0502 23.6541 35.242 24.7936L38.5405 21.4952C36.5489 19.6395 33.9457 18.5 30.8459 18.5C26.3505 18.5 22.4614 21.077 20.5691 24.8355L24.4111 27.815C25.3155 25.0968 27.8507 23.0739 30.8459 23.0739Z" fill="#EA4335"/>
                    <path d="M70.1409 31.3711C69.9976 32.888 69.4377 34.0729 68.4612 34.9258C67.4846 35.7721 66.1858 36.1953 64.5647 36.1953C63.4319 36.1953 62.4325 35.9284 61.5667 35.3945C60.7073 34.8542 60.0432 34.0892 59.5745 33.0996C59.1057 32.11 58.8616 30.9609 58.842 29.6523V28.3242C58.842 26.9831 59.0797 25.8014 59.5549 24.7793C60.0302 23.7572 60.7105 22.9694 61.5959 22.416C62.4879 21.8626 63.5165 21.5859 64.6819 21.5859C66.2509 21.5859 67.5139 22.0124 68.4709 22.8652C69.428 23.7181 69.9846 24.9225 70.1409 26.4785H67.6799C67.5627 25.4564 67.2633 24.7207 66.7815 24.2715C66.3062 23.8158 65.6064 23.5879 64.6819 23.5879C63.6077 23.5879 62.7808 23.9818 62.2014 24.7695C61.6285 25.5508 61.3355 26.6999 61.3225 28.2168V29.4766C61.3225 31.013 61.5959 32.1849 62.1428 32.9922C62.6962 33.7995 63.5035 34.2031 64.5647 34.2031C65.5347 34.2031 66.2639 33.985 66.7522 33.5488C67.2405 33.1126 67.5497 32.3867 67.6799 31.3711H70.1409ZM71.6838 30.6191C71.6838 29.584 71.8889 28.653 72.2991 27.8262C72.7092 26.9928 73.2854 26.3548 74.0276 25.9121C74.7698 25.4629 75.6226 25.2383 76.5862 25.2383C78.012 25.2383 79.1676 25.6973 80.053 26.6152C80.9449 27.5332 81.4267 28.7507 81.4983 30.2676L81.5081 30.8242C81.5081 31.8659 81.3062 32.7969 80.9026 33.6172C80.5055 34.4375 79.9325 35.0723 79.1838 35.5215C78.4417 35.9707 77.5823 36.1953 76.6057 36.1953C75.1148 36.1953 73.9202 35.7005 73.0217 34.7109C72.1298 33.7148 71.6838 32.39 71.6838 30.7363V30.6191ZM74.0569 30.8242C74.0569 31.9115 74.2815 32.7643 74.7307 33.3828C75.1799 33.9948 75.8049 34.3008 76.6057 34.3008C77.4065 34.3008 78.0282 33.9883 78.4709 33.3633C78.9202 32.7383 79.1448 31.8236 79.1448 30.6191C79.1448 29.5514 78.9137 28.7051 78.4514 28.0801C77.9957 27.4551 77.3739 27.1426 76.5862 27.1426C75.8114 27.1426 75.1962 27.4518 74.7405 28.0703C74.2847 28.6823 74.0569 29.6003 74.0569 30.8242ZM85.717 25.4336L85.7854 26.6543C86.5667 25.7103 87.592 25.2383 88.8616 25.2383C91.0621 25.2383 92.1819 26.498 92.2209 29.0176V36H89.8479V29.1543C89.8479 28.4837 89.7014 27.9889 89.4084 27.6699C89.122 27.3444 88.65 27.1816 87.9924 27.1816C87.0354 27.1816 86.3225 27.6146 85.8538 28.4805V36H83.4807V25.4336H85.717ZM97.6213 22.8652V25.4336H99.4866V27.1914H97.6213V33.0898C97.6213 33.4935 97.6995 33.7865 97.8557 33.9688C98.0185 34.1445 98.3049 34.2324 98.7151 34.2324C98.9885 34.2324 99.2652 34.1999 99.5452 34.1348V35.9707C99.0048 36.1204 98.484 36.1953 97.9827 36.1953C96.1597 36.1953 95.2483 35.1895 95.2483 33.1777V27.1914H93.51V25.4336H95.2483V22.8652H97.6213ZM103.832 36H101.459V25.4336H103.832V36ZM101.313 22.6895C101.313 22.3249 101.427 22.0221 101.655 21.7812C101.889 21.5404 102.221 21.4199 102.651 21.4199C103.08 21.4199 103.412 21.5404 103.647 21.7812C103.881 22.0221 103.998 22.3249 103.998 22.6895C103.998 23.0475 103.881 23.347 103.647 23.5879C103.412 23.8223 103.08 23.9395 102.651 23.9395C102.221 23.9395 101.889 23.8223 101.655 23.5879C101.427 23.347 101.313 23.0475 101.313 22.6895ZM108.627 25.4336L108.696 26.6543C109.477 25.7103 110.502 25.2383 111.772 25.2383C113.972 25.2383 115.092 26.498 115.131 29.0176V36H112.758V29.1543C112.758 28.4837 112.612 27.9889 112.319 27.6699C112.032 27.3444 111.56 27.1816 110.903 27.1816C109.946 27.1816 109.233 27.6146 108.764 28.4805V36H106.391V25.4336H108.627ZM123.959 34.9648C123.263 35.7852 122.273 36.1953 120.99 36.1953C119.845 36.1953 118.976 35.86 118.383 35.1895C117.797 34.5189 117.504 33.5488 117.504 32.2793V25.4336H119.877V32.25C119.877 33.5911 120.434 34.2617 121.547 34.2617C122.699 34.2617 123.477 33.8483 123.881 33.0215V25.4336H126.254V36H124.018L123.959 34.9648ZM133.324 36.1953C131.821 36.1953 130.6 35.7233 129.662 34.7793C128.731 33.8288 128.266 32.5658 128.266 30.9902V30.6973C128.266 29.6426 128.468 28.7018 128.871 27.875C129.281 27.0417 129.854 26.3939 130.59 25.9316C131.326 25.4694 132.146 25.2383 133.051 25.2383C134.49 25.2383 135.6 25.6973 136.381 26.6152C137.169 27.5332 137.563 28.832 137.563 30.5117V31.4688H130.658C130.73 32.3411 131.02 33.0312 131.528 33.5391C132.042 34.0469 132.686 34.3008 133.461 34.3008C134.548 34.3008 135.434 33.8613 136.117 32.9824L137.397 34.2031C136.974 34.8346 136.407 35.3262 135.698 35.6777C134.994 36.0228 134.203 36.1953 133.324 36.1953ZM133.041 27.1426C132.39 27.1426 131.863 27.3704 131.459 27.8262C131.062 28.2819 130.808 28.9167 130.698 29.7305H135.219V29.5547C135.167 28.7604 134.955 28.1615 134.584 27.7578C134.213 27.3477 133.699 27.1426 133.041 27.1426ZM153.676 32.7285L155.356 25.4336H157.67L154.789 36H152.836L150.571 28.7441L148.344 36H146.391L143.5 25.4336H145.815L147.524 32.6504L149.692 25.4336H151.479L153.676 32.7285ZM161.781 36H159.408V25.4336H161.781V36ZM159.262 22.6895C159.262 22.3249 159.376 22.0221 159.604 21.7812C159.838 21.5404 160.17 21.4199 160.6 21.4199C161.03 21.4199 161.362 21.5404 161.596 21.7812C161.83 22.0221 161.948 22.3249 161.948 22.6895C161.948 23.0475 161.83 23.347 161.596 23.5879C161.362 23.8223 161.03 23.9395 160.6 23.9395C160.17 23.9395 159.838 23.8223 159.604 23.5879C159.376 23.347 159.262 23.0475 159.262 22.6895ZM167.348 22.8652V25.4336H169.213V27.1914H167.348V33.0898C167.348 33.4935 167.426 33.7865 167.582 33.9688C167.745 34.1445 168.031 34.2324 168.442 34.2324C168.715 34.2324 168.992 34.1999 169.272 34.1348V35.9707C168.731 36.1204 168.211 36.1953 167.709 36.1953C165.886 36.1953 164.975 35.1895 164.975 33.1777V27.1914H163.237V25.4336H164.975V22.8652H167.348ZM173.373 26.5859C174.148 25.6875 175.128 25.2383 176.313 25.2383C178.565 25.2383 179.708 26.5241 179.74 29.0957V36H177.367V29.1836C177.367 28.4544 177.208 27.9401 176.889 27.6406C176.576 27.3346 176.114 27.1816 175.502 27.1816C174.552 27.1816 173.842 27.6048 173.373 28.4512V36H171V21H173.373V26.5859ZM198.256 34.1543C197.742 34.8249 197.029 35.3327 196.117 35.6777C195.206 36.0228 194.171 36.1953 193.012 36.1953C191.821 36.1953 190.766 35.9251 189.848 35.3848C188.93 34.8444 188.22 34.0729 187.719 33.0703C187.224 32.0612 186.967 30.8861 186.948 29.5449V28.4316C186.948 26.2832 187.462 24.6068 188.49 23.4023C189.519 22.1914 190.955 21.5859 192.797 21.5859C194.379 21.5859 195.636 21.9766 196.567 22.7578C197.498 23.5391 198.058 24.6654 198.246 26.1367H195.824C195.551 24.4245 194.558 23.5684 192.846 23.5684C191.739 23.5684 190.896 23.9688 190.317 24.7695C189.744 25.5638 189.448 26.7324 189.428 28.2754V29.3691C189.428 30.9056 189.75 32.1003 190.395 32.9531C191.046 33.7995 191.948 34.2227 193.1 34.2227C194.363 34.2227 195.261 33.9362 195.795 33.3633V30.5801H192.865V28.7051H198.256V34.1543ZM200.297 30.6191C200.297 29.584 200.502 28.653 200.912 27.8262C201.323 26.9928 201.899 26.3548 202.641 25.9121C203.383 25.4629 204.236 25.2383 205.199 25.2383C206.625 25.2383 207.781 25.6973 208.666 26.6152C209.558 27.5332 210.04 28.7507 210.112 30.2676L210.121 30.8242C210.121 31.8659 209.92 32.7969 209.516 33.6172C209.119 34.4375 208.546 35.0723 207.797 35.5215C207.055 35.9707 206.196 36.1953 205.219 36.1953C203.728 36.1953 202.533 35.7005 201.635 34.7109C200.743 33.7148 200.297 32.39 200.297 30.7363V30.6191ZM202.67 30.8242C202.67 31.9115 202.895 32.7643 203.344 33.3828C203.793 33.9948 204.418 34.3008 205.219 34.3008C206.02 34.3008 206.642 33.9883 207.084 33.3633C207.533 32.7383 207.758 31.8236 207.758 30.6191C207.758 29.5514 207.527 28.7051 207.065 28.0801C206.609 27.4551 205.987 27.1426 205.199 27.1426C204.425 27.1426 203.809 27.4518 203.354 28.0703C202.898 28.6823 202.67 29.6003 202.67 30.8242ZM211.684 30.6191C211.684 29.584 211.889 28.653 212.299 27.8262C212.709 26.9928 213.285 26.3548 214.028 25.9121C214.77 25.4629 215.623 25.2383 216.586 25.2383C218.012 25.2383 219.168 25.6973 220.053 26.6152C220.945 27.5332 221.427 28.7507 221.498 30.2676L221.508 30.8242C221.508 31.8659 221.306 32.7969 220.903 33.6172C220.505 34.4375 219.933 35.0723 219.184 35.5215C218.442 35.9707 217.582 36.1953 216.606 36.1953C215.115 36.1953 213.92 35.7005 213.022 34.7109C212.13 33.7148 211.684 32.39 211.684 30.7363V30.6191ZM214.057 30.8242C214.057 31.9115 214.281 32.7643 214.731 33.3828C215.18 33.9948 215.805 34.3008 216.606 34.3008C217.406 34.3008 218.028 33.9883 218.471 33.3633C218.92 32.7383 219.145 31.8236 219.145 30.6191C219.145 29.5514 218.914 28.7051 218.451 28.0801C217.996 27.4551 217.374 27.1426 216.586 27.1426C215.811 27.1426 215.196 27.4518 214.74 28.0703C214.285 28.6823 214.057 29.6003 214.057 30.8242ZM223.1 30.6387C223.1 28.998 223.484 27.6895 224.252 26.7129C225.027 25.7298 226.052 25.2383 227.328 25.2383C228.533 25.2383 229.48 25.6582 230.17 26.498L230.278 25.4336H232.416V35.6777C232.416 37.0645 231.983 38.1582 231.117 38.959C230.258 39.7598 229.096 40.1602 227.631 40.1602C226.856 40.1602 226.098 39.9974 225.356 39.6719C224.62 39.3529 224.06 38.9329 223.676 38.4121L224.799 36.9863C225.528 37.8522 226.427 38.2852 227.494 38.2852C228.282 38.2852 228.904 38.0703 229.36 37.6406C229.815 37.2174 230.043 36.5924 230.043 35.7656V35.0527C229.36 35.8145 228.448 36.1953 227.309 36.1953C226.072 36.1953 225.059 35.7038 224.272 34.7207C223.49 33.7376 223.1 32.377 223.1 30.6387ZM225.463 30.8438C225.463 31.9049 225.678 32.7415 226.108 33.3535C226.544 33.959 227.146 34.2617 227.914 34.2617C228.871 34.2617 229.581 33.8516 230.043 33.0312V28.3828C229.594 27.582 228.891 27.1816 227.934 27.1816C227.153 27.1816 226.544 27.4909 226.108 28.1094C225.678 28.7279 225.463 29.6393 225.463 30.8438ZM237.387 36H235.014V21H237.387V36ZM244.633 36.1953C243.129 36.1953 241.908 35.7233 240.971 34.7793C240.04 33.8288 239.574 32.5658 239.574 30.9902V30.6973C239.574 29.6426 239.776 28.7018 240.18 27.875C240.59 27.0417 241.163 26.3939 241.899 25.9316C242.634 25.4694 243.455 25.2383 244.36 25.2383C245.798 25.2383 246.908 25.6973 247.69 26.6152C248.477 27.5332 248.871 28.832 248.871 30.5117V31.4688H241.967C242.039 32.3411 242.328 33.0312 242.836 33.5391C243.351 34.0469 243.995 34.3008 244.77 34.3008C245.857 34.3008 246.742 33.8613 247.426 32.9824L248.705 34.2031C248.282 34.8346 247.716 35.3262 247.006 35.6777C246.303 36.0228 245.512 36.1953 244.633 36.1953ZM244.35 27.1426C243.699 27.1426 243.171 27.3704 242.768 27.8262C242.371 28.2819 242.117 28.9167 242.006 29.7305H246.528V29.5547C246.476 28.7604 246.264 28.1615 245.893 27.7578C245.522 27.3477 245.007 27.1426 244.35 27.1426Z" fill="black" fillOpacity="0.54"/>
                    </g>
                    <defs>
                    <filter id="filter0_dd_1_461" x="0.845947" y="0" width="351" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="1.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.168 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_461"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="1.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.084 0"/>
                    <feBlend mode="normal" in2="effect1_dropShadow_1_461" result="effect2_dropShadow_1_461"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_461" result="shape"/>
                    </filter>
                    </defs>
                </svg>
                <svg width="346" height="54" viewBox="0 0 346 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.845947 16C0.845947 10.3995 0.845947 7.59921 1.93588 5.46009C2.89462 3.57847 4.42442 2.04867 6.30604 1.08993C8.44516 0 11.2454 0 16.8459 0H329.846C335.446 0 338.247 0 340.386 1.08993C342.267 2.04867 343.797 3.57847 344.756 5.46009C345.846 7.59921 345.846 10.3995 345.846 16V38C345.846 43.6005 345.846 46.4008 344.756 48.5399C343.797 50.4215 342.267 51.9513 340.386 52.9101C338.247 54 335.446 54 329.846 54H16.846C11.2454 54 8.44516 54 6.30604 52.9101C4.42442 51.9513 2.89462 50.4215 1.93588 48.5399C0.845947 46.4008 0.845947 43.6005 0.845947 38V16Z" fill="black"/>
                    <rect width="24" height="24" transform="translate(15.8459 15)" fill="black"/>
                    <path d="M37.1266 33.424C36.7788 34.2275 36.3671 34.9672 35.8901 35.6472C35.2398 36.5743 34.7074 37.216 34.2971 37.5724C33.6611 38.1573 32.9797 38.4568 32.2499 38.4739C31.726 38.4739 31.0943 38.3248 30.3589 38.0224C29.621 37.7214 28.943 37.5724 28.323 37.5724C27.6728 37.5724 26.9754 37.7214 26.2295 38.0224C25.4824 38.3248 24.8806 38.4824 24.4205 38.498C23.7207 38.5278 23.0232 38.2197 22.327 37.5724C21.8826 37.1848 21.3268 36.5204 20.661 35.5791C19.9466 34.5739 19.3592 33.4084 18.8991 32.0795C18.4063 30.6442 18.1593 29.2543 18.1593 27.9087C18.1593 26.3673 18.4924 25.0379 19.1595 23.9238C19.6838 23.029 20.3813 22.3231 21.2543 21.8049C22.1272 21.2867 23.0705 21.0227 24.0863 21.0058C24.6421 21.0058 25.371 21.1777 26.2768 21.5156C27.18 21.8546 27.7599 22.0265 28.0142 22.0265C28.2043 22.0265 28.8486 21.8255 29.9408 21.4247C30.9736 21.0531 31.8453 20.8992 32.5594 20.9598C34.4945 21.1159 35.9483 21.8788 36.9151 23.253C35.1845 24.3016 34.3284 25.7703 34.3454 27.6544C34.361 29.122 34.8934 30.3432 35.9397 31.3129C36.4139 31.7629 36.9435 32.1107 37.5327 32.3578C37.4049 32.7283 37.27 33.0832 37.1266 33.424ZM32.6886 15.9601C32.6886 17.1104 32.2684 18.1844 31.4307 19.1785C30.4199 20.3602 29.1973 21.0431 27.8714 20.9354C27.8545 20.7974 27.8447 20.6521 27.8447 20.4995C27.8447 19.3953 28.3254 18.2135 29.1791 17.2472C29.6053 16.758 30.1473 16.3512 30.8047 16.0267C31.4606 15.7071 32.081 15.5303 32.6645 15.5C32.6815 15.6538 32.6886 15.8076 32.6886 15.9601V15.9601Z" fill="white"/>
                    <path d="M62.092 34.2344C65.3342 34.2344 67.5413 32.5254 68.0784 29.6152H65.9006C65.4612 31.3145 64.0647 32.3203 62.1018 32.3203C59.5139 32.3203 57.8733 30.2402 57.8733 26.9492C57.8733 23.6875 59.5334 21.5879 62.092 21.5879C64.0061 21.5879 65.51 22.7695 65.9006 24.5762H68.0686C67.6975 21.6367 65.2854 19.6738 62.092 19.6738C58.1565 19.6738 55.637 22.4863 55.637 26.9492C55.637 31.4414 58.137 34.2344 62.092 34.2344ZM74.2112 34.1953C77.1506 34.1953 79.0842 32.1738 79.0842 28.8633C79.0842 25.5625 77.1409 23.541 74.2112 23.541C71.2815 23.541 69.3381 25.5625 69.3381 28.8633C69.3381 32.1738 71.2717 34.1953 74.2112 34.1953ZM74.2112 32.457C72.5608 32.457 71.4866 31.1484 71.4866 28.8633C71.4866 26.5879 72.5608 25.2793 74.2112 25.2793C75.8616 25.2793 76.9358 26.5879 76.9358 28.8633C76.9358 31.1484 75.8713 32.457 74.2112 32.457ZM80.7151 34H82.8245V28.0137C82.8245 26.4219 83.7815 25.3672 85.2659 25.3672C86.7307 25.3672 87.4534 26.2168 87.4534 27.7598V34H89.5725V27.3496C89.5725 24.9961 88.2737 23.5508 86.0081 23.5508C84.426 23.5508 83.3323 24.2734 82.7756 25.4453H82.7268V23.7266H80.7151V34ZM92.2288 21.2949V23.7266H90.7346V25.3965H92.2288V31.2949C92.2288 33.2773 93.0393 34.0684 95.1194 34.0684C95.5881 34.0684 96.0569 34.0293 96.2913 33.9707V32.3008C96.1545 32.3301 95.8127 32.3496 95.5979 32.3496C94.7385 32.3496 94.3479 31.9492 94.3479 31.0605V25.3965H96.301V23.7266H94.3479V21.2949H92.2288ZM99.1624 22.0664C99.8362 22.0664 100.373 21.5195 100.373 20.8555C100.373 20.1816 99.8362 19.6445 99.1624 19.6445C98.4885 19.6445 97.9417 20.1816 97.9417 20.8555C97.9417 21.5195 98.4885 22.0664 99.1624 22.0664ZM98.1077 34H100.217V23.7266H98.1077V34ZM102.375 34H104.485V28.0137C104.485 26.4219 105.442 25.3672 106.926 25.3672C108.391 25.3672 109.114 26.2168 109.114 27.7598V34H111.233V27.3496C111.233 24.9961 109.934 23.5508 107.668 23.5508C106.086 23.5508 104.992 24.2734 104.436 25.4453H104.387V23.7266H102.375V34ZM122.082 23.7266H119.973V29.7129C119.973 31.3145 119.055 32.3691 117.531 32.3691C116.076 32.3691 115.334 31.5293 115.334 29.9668V23.7266H113.225V30.377C113.225 32.7305 114.592 34.1855 116.828 34.1855C118.401 34.1855 119.446 33.4922 120.012 32.2617H120.061V34H122.082V23.7266ZM130.979 30.9824C130.696 31.8809 129.807 32.4863 128.606 32.4863C126.916 32.4863 125.842 31.3047 125.842 29.5176V29.3906H133.098V28.668C133.098 25.5527 131.321 23.541 128.469 23.541C125.569 23.541 123.713 25.6895 123.713 28.9121C123.713 32.1543 125.539 34.1953 128.557 34.1953C130.91 34.1953 132.688 32.8574 132.981 30.9824H130.979ZM128.469 25.2402C129.944 25.2402 130.94 26.3438 130.989 27.916H125.852C125.959 26.3633 126.994 25.2402 128.469 25.2402ZM152.356 23.7266H150.266L148.391 31.8125H148.342L146.194 23.7266H144.162L142.024 31.8125H141.985L140.11 23.7266H138L140.823 34H143L145.139 26.3047H145.188L147.346 34H149.543L152.356 23.7266ZM154.768 22.0664C155.442 22.0664 155.979 21.5195 155.979 20.8555C155.979 20.1816 155.442 19.6445 154.768 19.6445C154.094 19.6445 153.547 20.1816 153.547 20.8555C153.547 21.5195 154.094 22.0664 154.768 22.0664ZM153.713 34H155.823V23.7266H153.713V34ZM158.596 21.2949V23.7266H157.102V25.3965H158.596V31.2949C158.596 33.2773 159.406 34.0684 161.487 34.0684C161.955 34.0684 162.424 34.0293 162.658 33.9707V32.3008C162.522 32.3301 162.18 32.3496 161.965 32.3496C161.106 32.3496 160.715 31.9492 160.715 31.0605V25.3965H162.668V23.7266H160.715V21.2949H158.596ZM164.485 34H166.594V28.0625C166.594 26.4414 167.551 25.3672 169.114 25.3672C170.598 25.3672 171.36 26.2754 171.36 27.7891V34H173.479V27.3789C173.479 25.0547 172.131 23.5508 169.875 23.5508C168.313 23.5508 167.19 24.2441 166.623 25.4453H166.574V19.9082H164.485V34ZM189.016 34H191.33L186.242 19.9082H183.879L178.791 34H181.067L182.356 30.1914H187.727L189.016 34ZM185.012 22.252H185.071L187.17 28.4336H182.912L185.012 22.252ZM197.981 23.5605C196.496 23.5605 195.315 24.3125 194.709 25.4941H194.67V23.7266H192.629V37.3984H194.739V32.3105H194.787C195.373 33.4531 196.545 34.1758 198.02 34.1758C200.598 34.1758 202.307 32.1152 202.307 28.8633C202.307 25.6113 200.588 23.5605 197.981 23.5605ZM197.424 32.3887C195.803 32.3887 194.729 31.002 194.729 28.8633C194.729 26.7441 195.813 25.3379 197.424 25.3379C199.094 25.3379 200.139 26.7148 200.139 28.8633C200.139 31.0215 199.094 32.3887 197.424 32.3887ZM209.289 23.5605C207.805 23.5605 206.623 24.3125 206.018 25.4941H205.979V23.7266H203.938V37.3984H206.047V32.3105H206.096C206.682 33.4531 207.854 34.1758 209.328 34.1758C211.906 34.1758 213.615 32.1152 213.615 28.8633C213.615 25.6113 211.897 23.5605 209.289 23.5605ZM208.733 32.3887C207.112 32.3887 206.037 31.002 206.037 28.8633C206.037 26.7441 207.121 25.3379 208.733 25.3379C210.403 25.3379 211.448 26.7148 211.448 28.8633C211.448 31.0215 210.403 32.3887 208.733 32.3887ZM215.324 34H217.434V19.9082H215.324V34ZM226.408 30.9824C226.125 31.8809 225.237 32.4863 224.035 32.4863C222.346 32.4863 221.272 31.3047 221.272 29.5176V29.3906H228.528V28.668C228.528 25.5527 226.75 23.541 223.899 23.541C220.998 23.541 219.143 25.6895 219.143 28.9121C219.143 32.1543 220.969 34.1953 223.987 34.1953C226.34 34.1953 228.117 32.8574 228.41 30.9824H226.408ZM223.899 25.2402C225.373 25.2402 226.369 26.3438 226.418 27.916H221.281C221.389 26.3633 222.424 25.2402 223.899 25.2402Z" fill="white"/>
                </svg>
            </div>
        </div>
    );

};
export default RegisterPage;