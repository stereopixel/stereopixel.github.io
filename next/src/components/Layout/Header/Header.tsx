/** @format */
"use client"

import React, { useEffect, useRef, useState } from "react"
import styles from "./Header.module.css"

const collapseThreshold = 10

export default function Header() {
  const scroll = useRef({ current: 0, prev: 0 })
  const [collapsed, setCollapsed] = useState(false)
  const [opaque, setOpaque] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const newScrollY = document.body.scrollTop

      if (scroll.current.prev < scroll.current.current && scroll.current.current > newScrollY) setCollapsed(c => false)
      else if (scroll.current.prev > scroll.current.current && scroll.current.current < newScrollY) setCollapsed(c => true)

      if (newScrollY < collapseThreshold) setOpaque(false)
      else if (scroll.current.current < collapseThreshold && newScrollY >= collapseThreshold) setOpaque(true)

      scroll.current.prev = scroll.current.current
      scroll.current.current = newScrollY
    }

    document.body.addEventListener("scroll", handleScroll)
    return () => document.body.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`${styles.container} ${collapsed ? styles.collapsed : ""} ${opaque ? styles.opaque : ""}`}>
      <div className={styles.left}>
        <div className={styles.logo_container}>{logo}</div>
      </div>
      <div>
        <nav className={styles.nav}>
          <a href="#hero">Home</a>
          <a href="#skills">Skills</a>
          <a href="#works">Works</a>
          <a href="#about">About</a>
          <a href="#contact" className={styles.call_to_action}>
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  )
}

const logo = (
  <svg className={styles.logo} version="1.1" viewBox="0 0 301.86 252.07" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(103.34 54.479)">
      <path
        d="m39.771-54.479-4.58e-4 1e-3 -90.196-5.16e-4 -52.917 91.655 75.466 130.71 75.466 29.708 75.466-29.708 75.466-130.71-52.917-91.655zm90.196 27.086 37.279 64.569-37.279 64.569-58.919-5.2e-4 37.278-64.568-37.279-64.569zm-105.83 5.16e-4 -37.279 64.569 37.279 64.569h-58.92l-37.279-64.569 37.279-64.569zm23.457 13.543 29.46 51.026-29.459 51.025-29.46-51.025zm-43.117 138.43c10.118-4e-5 18.32 8.2017 18.32 18.319 1.14e-4 10.118-8.202 18.32-18.32 18.32-10.118 1e-4 -18.32-8.202-18.32-18.32 2.29e-4 -10.118 8.2023-18.319 18.32-18.319zm86.236 0c10.117 2.1e-4 18.319 8.2019 18.319 18.319 1.1e-4 10.118-8.2017 18.32-18.319 18.32-10.118 1e-4 -18.32-8.202-18.32-18.32 2.3e-4 -10.118 8.2023-18.319 18.32-18.319z"
        fill="#000"
      />
    </g>
  </svg>
)
