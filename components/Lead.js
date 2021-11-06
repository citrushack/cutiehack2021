import Image from 'next/image'
import { motion } from 'framer-motion'
import leaves from '../public/assets/leaves.png'

import styles from '../styles/Team.module.css'

export default function Lead( props ) {
  return (
    <figure>
      <a target='_blank' rel='noopener noreferrer' href={props.linkedin}>
        <motion.div 
          whileHover={{ y: -8 }}
          className={styles.image}
        >
          <div className={styles.leaves}>
            <Image
              src={leaves}
              alt='leaves'
              width={279}
              height={122}
              quality={80}
              layout='responsive'
              objectFit='contain'
            />
          </div>
          <Image
            src={props.image}
            alt='lead profile picture'
            width={props.width}
            height={props.height}
            quality={80}
            layout='responsive'
            objectFit='contain'
            className={styles.link}
          />
        </motion.div>
      </a>
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