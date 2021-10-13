import Image from 'next/image'
import logo from '../public/assets/logo.png'

import styles from '../styles/Live.module.css'

export default function Judge( props ) {
  return (
    <figure>
      <div className={styles.image}>
        <Image
          src={props.image}
          alt='lead profile picture'
          width={props.width}
          height={props.height}
          quality={80}
          layout='responsive'
          objectFit='contain'
          className={props.image !== logo && styles.link}
        />
      </div>
      <figcaption>
        <p className={styles.name}>
          {props.name}
        </p>
        <p className={styles.role}>
          {props.role}
        </p>
      </figcaption>
    </figure>
  )
}