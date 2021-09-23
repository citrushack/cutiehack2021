import { motion } from 'framer-motion'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      layout='position'
      className={styles.layout}
    >
      {children}
    </motion.main>
  )
}
