/** @format */
"use client"

import Image from "next/image"
import styles from "./page.module.css"
import Header from "@/components/Layout/Header/Header"
// import Layout from "@/components/Layout/Layout"
import Hero from "@/components/Hero/Hero"
import Projects from "@/components/Projects/Projects"
import Contact from "@/components/Contact/Contact"
import Services from "@/components/Services/Services"
import About from "@/components/About/About"
import { useEffect } from "react"

const consoleArt = (
"|=-----❤️-----=    CONTACT ME    =-----❤️-----=|\n"+
"Hey there!👋 I'm glad you liked the site.\n"+
"Look under the hood here:      \n"+
"https://github.com/PedroFFrontend/PedroFFrontend.github.io\n"+
"\n"+
"And don't forget to shoot me an email: \n"+
"pedroferreirafrontend@gmail.com\n"+
"if you need me to come do awesome work at your company 🤝\n"+
"               __,...__               \n"+
"           _,-'::::::::`-.            \n"+
"         ,'::,----._::::::`.          \n"+
"       ,'::,' /\\,-. \\:::::::`.      \n"+
"      /::::| ;    | |:::::::::`.      \n"+
"      |:::::`._   \\ |:::::::::::\\    \n"+
"    __\\,:--''--`_--':::::::::::::\\  \n"+
"  `'--::__:::::::`-:_:::::::::::::\\  \n"+
"      /--.`'--:_:::::`-::::::::::::\\ \n"+
"     /,-_.'    _`-:_::::`:::::::::::\\\n"+
"     / /o\|   ,-_`-.`--:::`::::::::::)\n"+
"    || \\_/|  / /o\\         `:,'''-:'\n"+
"  (#__`-_/   | \\_/|        /##|  ,-.\\\n"+
" ,''     `-. `.__/       ,'###| /   ||\n"+
"/           \\      ,    (##### /    ||\n"+
"|           |___,-##\     /##/ \\__,'/\n"+
"\\          /########)    |#,'|__..-' \n"+
" `-..__..-'######)          /         \n"+
"     \\`.###'`\"\"'           /       \n"+
"      \\\\\\__//            ,'        \n"+
"       \\`--'         _,-'            \n"+
"        `-..___..--''                 \n")


export default function Home() {

  useEffect(() => console.log(consoleArt),[])







  return (
    <>
      <Hero />
      <Services />
      <Projects />
      {/* <About /> */}
      <Contact />
    </>

    /* <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
        </a>
      </div> */
  )
}
