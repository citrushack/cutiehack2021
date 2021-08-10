import Layout from '../components/Layout'
import styles from '../styles/Index.module.css'

export default function Custom500() {
  return (
    <Layout>
      <div className={styles.title}>500</div>
      <div className={styles.description}>
        We are having trouble fetching important data right now. Please check
        back later.
      </div>
    </Layout>
  )
}
