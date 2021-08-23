import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Team.module.css'

export default function Lead( props ) {
  return (
    <figure>
      <Link passHref href={props.linkedin}>
        <Image
          src={props.image}
          alt="lead profile picture"
          width={props.width}
          height={props.height}
          className={styles.link}
        />
      </Link>
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