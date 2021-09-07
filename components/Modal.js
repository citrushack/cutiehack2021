import React, { useState, useEffect } from 'react'

import { IoCloseCircle } from 'react-icons/io5'

import styles from '../styles/Modal.module.css'

export default function Modal( props ) {
  return (
    <>
      <div className={props.show ? `${styles.modal} ${styles.show}` : `${styles.modal}`}>
        <div>
          <div className={styles.header}>
            <div>
              <IoCloseCircle className={styles.windowButton} onClick={props.handler}/>
            </div>
            <div className={styles.filler}>
              <IoCloseCircle className={styles.windowButton} />
            </div>
          </div>
          <div className={styles.body}>
            <h2 className={styles.heading}>{props.header}</h2>
            <p className={styles.caption}>{props.caption}</p>
            {props.children}
          </div>
        </div>
      </div>
      <div className={styles.overlay} onClick={props.handler} />
    </>
  )
}