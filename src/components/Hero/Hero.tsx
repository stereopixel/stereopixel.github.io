/** @format */

import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div id="hero" className={styles.container}>
      <div className={styles.description}>
        <h1 className={styles.intro}>GM, I&apos;m Pedro.</h1>
        <div className={styles.titles}>
          I build
          <h2 className={styles.title_engineer}>
            {/* {designIcon2}  */}
            Software & Math
          </h2>
          {/* <div className={styles.title_developer}> */}
          {/* {codeIcon}  */}
          {/* Front-end Developer */}
          {/* </div> */}
          {/* <div className={styles.title_mathematician}>Math</div> */}
        </div>
        <div className={styles.buttons}>
          <a href="#skills" className={styles.projects_button}>
            See my skills
          </a>
          <a href="#works" className={styles.projects_button}>
            See my work
          </a>
          <a href="#contact" className={styles.contact_button}>
            {mailIcon}
            Get in touch
          </a>
        </div>
        <div>
          <a
            href="http://github.com/stereopixel"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.gh_link}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              height={24}
            >
              <title>Github</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="white"
              ></path>
            </svg>
            @stereopixel
          </a>
        </div>
      </div>
      <div className={styles.scroll}>{downArrow}</div>
      <div className={styles.image_container} />
    </div>
  );
}

const designIcon = (
  <svg
    fill="#fff"
    height="1em"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 230 230"
  >
    <path
      d="M172.069,179.817l9.392-4.251l-17.772-39.262h9.194v5.154h11.453v-21.763h-11.453v5.154h-14.379l-15.296-33.79h6.653V63.27
h-3.827c2.132-4.47,3.328-9.467,3.328-14.74c0-16.995-12.406-31.14-28.636-33.875V0h-11.453v14.655
C93.044,17.39,80.638,31.535,80.638,48.53c0,5.273,1.196,10.271,3.328,14.74h-3.827v27.79h6.653l-15.296,33.79H57.117v-5.154H45.664
v21.763h11.453v-5.154h9.194l-17.772,39.262l9.392,4.252L38.026,223.79L51.743,230l19.903-43.974l4.321,1.956l23.394-51.678h9.912
v5.154h11.453v-5.154h9.912l23.393,51.678l4.321-1.956L178.257,230l13.717-6.21L172.069,179.817z M97.481,63.27
c-3.36-3.987-5.391-9.13-5.391-14.74c0-10.654,7.313-19.633,17.183-22.182V63.27H97.481z M120.727,124.85v-5.154h-11.453v5.154
h-4.727L115,101.758l10.454,23.092H120.727z M132.519,63.27h-11.792V26.348c9.87,2.549,17.183,11.528,17.183,22.182
C137.909,54.14,135.879,59.283,132.519,63.27z"
    />
  </svg>
);

const designIcon2 = (
  <svg
    fill="#fff"
    height="1em"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 218.1 218.1"
  >
    <path
      d="M207.511,114.183l-34.825-34.825L218.1,33.944l-9.9-24.041l-24.041-9.899l-45.414,45.414L103.92,10.593L64.68,49.832
l103.592,103.59L207.511,114.183z M184.276,22.983c2.994-2.994,7.849-2.993,10.843,0.001c2.994,2.994,2.994,7.849,0,10.843
c-2.994,2.994-7.85,2.994-10.844,0C181.281,30.833,181.282,25.978,184.276,22.983z M6.8,138.976l-6.8-6.8l62.933-62.932
l85.921,85.92L85.92,218.096L39.3,171.476l10.993-20.271l-20.271,10.994l-16.674-16.674l7.763-14.31L6.8,138.976z"
    />
  </svg>
);

const codeIcon = (
  <svg
    fill="#fff"
    height="1em"
    version="1.1"
    viewBox="0 0 103.87 102.86"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(-51.014 -75.014)">
      <g transform="matrix(4.3279 0 0 4.3279 38.031 -1189.5)">
        <path
          transform="translate(0 289.06)"
          d="m11.779 3.1172c-4.4624 0-6.1607 1.1881-5.7969 4.4863l0.36523 3.4668c0.19402 1.8189-1.2862 2.377-3.3477 2.377v3.1055c2.0857 0 3.5417 0.55806 3.3477 2.377l-0.36523 3.4922c-0.33953 3.2498 1.3345 4.4609 5.7969 4.4609v-2.668c-1.4794 0-2.3771-0.31474-2.2559-1.5273l0.36328-3.5898c0.29102-2.7405-1.1628-3.7096-3.7578-4.0977 2.4495-0.36378 4.0488-1.3814 3.7578-4.0977l-0.36328-3.5898c-0.12126-1.2126 0.75224-1.5273 2.2559-1.5273zm6.4414 0v2.668c1.4794 0 2.3771 0.31474 2.2559 1.5273l-0.36328 3.5898c-0.29102 2.7405 1.1882 3.7096 3.7832 4.0977-2.4737 0.36378-4.0742 1.3814-3.7832 4.0977l0.36328 3.5898c0.12126 1.2126-0.75224 1.5273-2.2559 1.5273v2.668c4.4624 0 6.1607-1.1881 5.7969-4.4863l-0.36523-3.4668c-0.19402-1.8189 1.3105-2.377 3.3477-2.377v-3.1055c-2.0614 0-3.5417-0.55805-3.3477-2.377l0.36523-3.4922c0.33953-3.2498-1.3345-4.4609-5.7969-4.4609z"
          strokeWidth="1.6494"
        />
      </g>
    </g>
  </svg>
);

const mailIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1rem"
    viewBox="2 2 20 20"
    fill="none"
    stroke="#fff"
    strokeWidth="2"
    strokeLinejoin="round"
    strokeLinecap="round"
  >
    <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" />
    <rect x="3" y="5" width="18" height="14" rx="2" />
  </svg>
);

const downArrow = (
  <svg
    height="2em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 10L12 15L17 10"
      stroke="gray"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
