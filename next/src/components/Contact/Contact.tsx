/** @format */

import React from "react"
import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Hit Me Up</h2>
        <p>Got a problem to solve?</p>
        <p>Tell me your ideas to develop your dream website.</p>
      </div>
      <address>
        <a href="mailto:webmaster@example.com" className={styles.email}>
          webmaster@example.com
        </a>
      </address>
    </div>
  )
}
