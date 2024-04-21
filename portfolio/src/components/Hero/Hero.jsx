import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Fernando</h1>
            <p className={styles.description}>
                I'm an Informatics Engineer Student at University of Minho, looking for my
                first internship to get more experience. Reach out if you'd like to learn more!
            </p>
            <a className={styles.contactBtn} href="mailto:ferjpires@gmail.com">Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/me.png")} alt="My picture"/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero