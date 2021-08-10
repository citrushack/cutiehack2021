import Layout from '../components/Layout'
import styles from '../styles/Index.module.css'

export default function Custom404() {
  return (
    <Layout>
      <div className={styles.title}>404</div>
      <div className={styles.description}>Page Not Found</div>
    </Layout>
  )
}
