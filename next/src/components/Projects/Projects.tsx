/** @format */

import React from "react"
import styles from "./Projects.module.css"
import Project from "./Project/Project"

export type ProjectType = {
  title: string
  description: string
  srcUrl: string
  url: string
}

export default function Projects() {
  const projects: ProjectType[] = [
    {
      title: "Helios",
      description: `Helios brings you visually compelling real-time global weather data, from both the present and the future.`,
      url: "",
      srcUrl: "",
    },
    {
      title: "Megabite",
      description: "Food ordering E-Commerce app",
      url: "",
      srcUrl: "",
    },
    {
      title: "Fren",
      description: "Web3 App",
      url: "",
      srcUrl: "",
    },
  ]

  return (
    <div className={styles.container} id="works">
      <div className={styles.header}>
        <h2 className={styles.title}>Works</h2>
        <p>Let me show you what I do.</p>
      </div>
      <div className={styles.content}>
        {projects.map((p, i) => (
          <Project key={i} {...p} />
        ))}
      </div>
    </div>
  )
}
