/** @format */

import React from "react";
import styles from "./Project.module.css";
import { ProjectType } from "../Projects";

export default function Project({
  title,
  description,
  url,
  srcUrl,
  screenshot,
}: ProjectType) {
  return (
    <div className={styles.container}>
      <div className={styles.top_left_corner} />
      <div className={styles.top_right_corner} />
      <div className={styles.bottom_left_corner} />
      <div className={styles.bottom_right_corner} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttons}>
          {url && (
            <a
              className={styles.view_project_button}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {eyeIcon} View Project
            </a>
          )}
          <a
            className={styles.view_code_button}
            href={srcUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {githubIcon} View Source Code
          </a>
        </div>
      </div>
      <div className={styles.screenshot_container}>
        <img src={screenshot} alt={title} className={styles.img} />
      </div>
      <div className={styles.image_container} />
    </div>
  );
}

const eyeIcon = (
  <svg
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
    <path
      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
      clipRule="evenodd"
      fillRule="evenodd"
    ></path>
  </svg>
);

const githubIcon = (
  <svg
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
      clipRule="evenodd"
      fillRule="evenodd"
    ></path>
  </svg>
);
