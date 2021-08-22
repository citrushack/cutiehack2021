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
              rajbir johar<br></br>director
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
              audrey kim<br></br>director
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
              paulian le<br></br>operations lead
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
              westin montano<br></br>operations lead
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
              mariam golwalla<br></br>sponsorship lead
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
              marshall jones<br></br>sponsorship lead
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
              henry zheng<br></br>marketing lead
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
              kimmy lac<br></br>marketing lead
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
              michelle kim<br></br>web dev lead
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
              j.s. pescasio<br></br>web dev lead
            </figcaption>
          </figure>
        </div>
        <div className={styles.grid}>
          <div className={styles.col}>
            <h4>operations committee</h4>
            <ul>
              <li>john doe</li>
              <li>john doe</li>
              <li>john doe</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>sponsorship committee</h4>
            <ul>
              <li>john doe</li>
              <li>john doe</li>
              <li>john doe</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>marketing committee</h4>
            <ul>
              <li>john doe</li>
              <li>john doe</li>
              <li>john doe</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>web dev committee</h4>
            <ul>
              <li>john doe</li>
              <li>john doe</li>
              <li>john doe</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
