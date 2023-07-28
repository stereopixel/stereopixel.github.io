/** @format */

import React from "react"
import styles from "./About.module.css"

export default function About() {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>About Me</h2>
        <p>Let me tell you about myself.</p>
      </div>
      <div className={styles.content}></div>
    </div>
  )
}
