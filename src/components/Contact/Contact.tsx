/** @format */

import React from "react"
import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div>Contact me</div>
          <h2>Got a problem to solve?</h2>
          <p>Tell me your ideas to develop your dream website.</p>
          <a href="mailto:pedroferreirafrontend@gmail.com" className={styles.email}>
          Get in touch {rightArrow}
        </a>
        </div>
        
      </div>
      <div className={styles.image_container}/>
    </div>
  )
}

const rightArrow = <svg className={styles.rightArrow} height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 7L15 12L10 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
