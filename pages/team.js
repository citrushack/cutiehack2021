import React from 'react'

import styles from '../styles/Team.module.css'

export default function Team() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.title}>our team</div>
        <div className={styles.grid}>
          <figure>
            <img src="https://picsum.photos/200?random" alt="placeholder"></img>
            <figcaption>Name<br></br> Position</figcaption>
          </figure>
          <figure>
            <img src="https://picsum.photos/200?random" alt="placeholder"></img>
            <figcaption>Name<br></br> Position</figcaption>
          </figure>
          <figure>
            <img src="https://picsum.photos/200?random" alt="placeholder"></img>
            <figcaption>Name<br></br> Position</figcaption>
          </figure>
          <figure>
            <img src="https://picsum.photos/200?random" alt="placeholder"></img>
            <figcaption>Name<br></br> Position</figcaption>
          </figure>
          <figure>
            <img src="https://picsum.photos/200?random" alt="placeholder"></img>
            <figcaption>Name<br></br> Position</figcaption>
          </figure>
          <figure>
            <img src="https://picsum.photos/200?random" alt="placeholder"></img>
            <figcaption>Name<br></br> Position</figcaption>
          </figure>
          <figure>
            <img src="https://picsum.photos/200?random" alt="placeholder"></img>
            <figcaption>Name<br></br> Position</figcaption>
          </figure>
          <figure>
            <img src="https://picsum.photos/200?random" alt="placeholder"></img>
            <figcaption>Name<br></br> Position</figcaption>
          </figure>
          <figure>
            <img src="https://picsum.photos/200?random" alt="placeholder"></img>
            <figcaption>Name<br></br> Position</figcaption>
          </figure>
          <figure>
            <img src="https://picsum.photos/200?random" alt="placeholder"></img>
            <figcaption>Name<br></br> Position</figcaption>
          </figure>
        </div>
        <div className={styles.grid}>
        <div className={styles.col}>
        <h4>Web Dev Committee</h4>
        <ul>
          <li>John Doe</li>
        </ul>
        </div>
        <div className={styles.col}>
        <h4>Sponsorship Committee</h4>
        <ul>
          <li>John Doe</li>
        </ul>
        </div>
        <div className={styles.col}>
        <h4>Operations Committee</h4>
        <ul>
          <li>John Doe</li>
        </ul>
        </div>
        <div className={styles.col}>
        <h4>Marketing Committee</h4>
        <ul>
          <li>John Doe</li>
        </ul>
        </div>
      </div>
      </div>
    </main>
  )
}
