import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './about-me.module.css'

const AboutMe = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>About Me: - Portfolio Page</title>
        <meta property="og:title" content="About Me: - Portfolio Page" />
      </Helmet>
      <span>
        <span className={styles['text1']}></span>
        <span className={styles['text2']}>Coming Soon!</span>
        <br></br>
        <span></span>
      </span>
    </div>
  )
}

export default AboutMe
