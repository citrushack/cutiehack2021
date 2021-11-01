import React, { useState } from 'react'
import Head from 'next/head'

import styles from '../styles/Form.module.css'

export default function CheckIn() {
  const [userEmails, setUserEmails] = useState([])
  const [checkinEmails, setCheckinEmails] = useState([])

  const getEmails = async () => {
    const response = await fetch('/api/checkUsers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
    const data = await response.json()
    setUserEmails(data.userEmails)
    setCheckinEmails(data.checkinEmails)
  }

  return (
    <section className={styles.section}>
      <Head>
        <title>Cutie Hack | Admin</title>
      </Head>
      <button
        className={styles.primarybutton}
        onClick={() => getEmails()}
      >
        Fetch Emails
      </button>
      <h1>All User Emails</h1>
      <p>
        {userEmails.map((email) =>
          <div>
            {email}
          </div>
        )}
      </p>
      <h1>All Approved Emails</h1>
      <p>
        {checkinEmails.map((email) =>
          <div>
            {email}
          </div>
        )}
      </p>
    </section>
  )
}
