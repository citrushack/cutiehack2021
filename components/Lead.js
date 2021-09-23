import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import styles from '../styles/Team.module.css'

export default function Lead( props ) {
  return (
    <figure>
      <Link passHref href={props.linkedin}>
        <motion.div 
            whileHover={{ y: -8 }}
            className={styles.image}
        >
          <div className={styles.leaves}>
            <Image
              src='/assets/leaves.png'
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