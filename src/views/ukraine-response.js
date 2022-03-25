import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import styles from './ukraine-response.module.css'

const UkraineResponse = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Ukraine Response - Portfolio Page</title>
        <meta property="og:title" content="Ukraine Response - Portfolio Page" />
      </Helmet>
      <h1 className={styles['text']}>
        <span>Update on the situation taking place in Ukraine:</span>
        <br></br>
        <span></span>
      </h1>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1566233590969-d77010fc90f7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHx1a3JhaW5lfGVufDB8fHx8MTY0ODE4NDI1Mg&amp;ixlib=rb-1.2.1&amp;w=600"
        className={styles['image']}
      />
      <span className={styles['text4']}>
        We hold the responsibility as a socially conscious corporation to stand
        in solidarity with our friends, the citizens of Ukraine. We encourage
        anyone to research and contribute in anyway possible to those suffering
        during the conflict in the Ukraine.
        <span
          dangerouslySetInnerHTML={{
            __html: ' ',
          }}
        />
      </span>
      <a href="https://example.com" target="_blank" rel="noreferrer noopener">
        Link
      </a>
      <a
        href="https://www.cnbc.com/2022/03/24/-russia-ukraine-live-updates.html"
        target="_blank"
        rel="noreferrer noopener"
        className={styles['link1']}
      >
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1565711561500-49678a10a63f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fFVrcmFpbmV8ZW58MHx8fHwxNjQ4MTg0NTQ2&amp;ixlib=rb-1.2.1&amp;w=500"
          className={styles['image1']}
        />
      </a>
      <span className={styles['text5']}>Text</span>
      <Link to="/" className={styles['navlink']}>
        <img
          alt="image"
          src="/playground_assets/g%20%5B2%5D-300w.png"
          className={styles['image2']}
        />
      </Link>
    </div>
  )
}

export default UkraineResponse
