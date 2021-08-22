import React from 'react'
import Image from 'next/image'

import styles from '../styles/Team.module.css'

export default function Team() {
  return (
    <section className={styles.section}>
      <h1>our team</h1>
      <div className={styles.team}>
        <div className={styles.grid}>
          <figure>
            <Image
              src="/assets/sun.png"
              alt="lead profile picture"
              width="200"
              height="200"
            />
            <figcaption>
              Name<br></br> Position
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/assets/sun.png"
              alt="lead profile picture"
              width="200"
              height="200"
            />
            <figcaption>
              Name<br></br> Position
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/assets/sun.png"
              alt="lead profile picture"
              width="200"
              height="200"
            />
            <figcaption>
              Name<br></br> Position
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/assets/sun.png"
              alt="lead profile picture"
              width="200"
              height="200"
            />
            <figcaption>
              Name<br></br> Position
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/assets/sun.png"
              alt="lead profile picture"
              width="200"
              height="200"
            />
            <figcaption>
              Name<br></br> Position
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/assets/sun.png"
              alt="lead profile picture"
              width="200"
              height="200"
            />
            <figcaption>
              Name<br></br> Position
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/assets/sun.png"
              alt="lead profile picture"
              width="200"
              height="200"
            />
            <figcaption>
              Name<br></br> Position
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/assets/sun.png"
              alt="lead profile picture"
              width="200"
              height="200"
            />
            <figcaption>
              Name<br></br> Position
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/assets/sun.png"
              alt="lead profile picture"
              width="200"
              height="200"
            />
            <figcaption>
              Name<br></br> Position
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/assets/sun.png"
              alt="lead profile picture"
              width="200"
              height="200"
            />
            <figcaption>
              Name<br></br> Position
            </figcaption>
          </figure>
        </div>
        <div className={styles.grid}>
          <div className={styles.col}>
            <h4>operations committee</h4>
            <ul>
              <li>John Doe</li>
              <li>John Doe</li>
              <li>John Doe</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>sponsorship committee</h4>
            <ul>
              <li>John Doe</li>
              <li>John Doe</li>
              <li>John Doe</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>marketing committee</h4>
            <ul>
              <li>John Doe</li>
              <li>John Doe</li>
              <li>John Doe</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>web dev committee</h4>
            <ul>
              <li>John Doe</li>
              <li>John Doe</li>
              <li>John Doe</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
