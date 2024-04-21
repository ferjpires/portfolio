import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./About.module.css"

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>
                About
            </h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/programmerIcon.png")} 
                    alt="Me sitting with a laptop" 
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/cursorIcon.png")}
                            alt="Cursor icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>
                                Front-end Enjoyer
                            </h3>
                            <p>
                                I'm currently learning front-end tools like React and NextJS and looking forward to master them.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/serverIcon.png")}
                            alt="Server icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>
                                Problem Solver
                            </h3>
                            <p>
                                I'm very passionate on problem solving with a knack for fixing not so good situations and finding solutions.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/uiIcon.png")}
                            alt="UI icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>
                                Leadership and Communication
                            </h3>
                            <p>
                                Proven leader with exceptional communication skills, adept at fostering collaboration and guiding teams towards success.
                            </p>
                        </div>
                    </li>   
                </ul>
            </div>
        </section>
    )
}

export default About