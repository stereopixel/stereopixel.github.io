/** @format */

import React from "react";
import styles from "./Projects.module.css";
import Project from "./Project/Project";
import homesteaderScreenshot from "public/homesteader.webp";
import frenScreenshot from "public/fren_screenshot.webp";
import portfolioScreenshot from "public/portfolio_screenshot.webp";
import heliosScreenshot from "public/helios_screenshot.webp";
import boulevardScreenshot from "public/boulevard_screenshot.webp";

export type ProjectType = {
  title: string;
  description: string;
  srcUrl: string;
  url?: string;
  screenshot: string;
};

export default function Projects() {
  const projects: ProjectType[] = [
    {
      title: "Homesteader",
      description: "A WIP software platform to manage your homestead.",
      srcUrl: "https://github.com/stereopixel/stereopixel.github.io",
      screenshot: homesteaderScreenshot.src,
    },
    {
      title: "Helios",
      description: `Helios brings you visually compelling real-time global weather data, from both the present and the future.`,
      url: "https://helios-nu.vercel.app/",
      srcUrl: "https://github.com/stereopixel/helios",
      screenshot: heliosScreenshot.src,
    },
    {
      title: "F.R.E.N.",
      description: "A network-based blockchain explorer.",
      url: "https://fren-explorer.vercel.app/",
      srcUrl: "https://github.com/stereopixel/fren",
      screenshot: frenScreenshot.src,
    },

    {
      title: "Boulevard",
      description: "A minimalistic e-commerce app.",
      srcUrl: "https://github.com/stereopixel/boulevard",
      screenshot: boulevardScreenshot.src,
    },
    {
      title: "Portfolio",
      description: "This portfolio website.",
      url: "https://stereopixel.github.io/",
      srcUrl: "https://github.com/stereopixel/stereopixel.github.io",
      screenshot: portfolioScreenshot.src,
    },
  ];

  return (
    <div className={styles.container} id="works">
      <div className={styles.header}>
        <h2 className={styles.title}>Selected Works</h2>
        {/* <p>Let me show you what I can do.</p> */}
      </div>
      <div className={styles.content}>
        {projects.map((p, i) => (
          <Project key={i} {...p} />
        ))}
      </div>

      {/* <div className={styles.image_container}/> */}
    </div>
  );
}
