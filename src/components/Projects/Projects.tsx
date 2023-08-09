/** @format */

import React from "react"
import styles from "./Projects.module.css"
import Project from "./Project/Project"
import frenScreenshot from "public/fren_screenshot.png"

export type ProjectType = {
  title: string
  description: string
  srcUrl: string
  url: string
  screenshot: string
}

export default function Projects() {
  const projects: ProjectType[] = [    
    {
      title: "F.R.E.N.",
      description: "A network-based blockchain explorer.",
      url: "https://fren-explorer.vercel.app/",
      srcUrl: "https://github.com/PedroFFrontend/fren",
      screenshot: frenScreenshot.src
    },
    {
      title: "Helios",
      description: `Helios brings you visually compelling real-time global weather data, from both the present and the future.`,
      url: "https://helios-nu.vercel.app/",
      srcUrl: "https://github.com/PedroFFrontend/helios",
      screenshot: frenScreenshot.src
    },
    {
      title: "Boulevard",
      description: "E-Commerce app",
      url: "https://shop-on-boulevard.vercel.app/",
      srcUrl: "https://github.com/PedroFFrontend/boulevard",
      screenshot: frenScreenshot.src
    },
  ]

  return (
    <div className={styles.container} id="works">
      <div className={styles.header}>
        <h2 className={styles.title}>Works</h2>
        {/* <p>Let me show you what I can do.</p> */}
      </div>
      <div className={styles.content}>
        {projects.map((p, i) => (
          <Project key={i} {...p} />
        ))}
      </div>
    </div>
  )
}
