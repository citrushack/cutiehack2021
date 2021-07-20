import React, { useState } from 'react';
import { FaChevronUp } from "react-icons/fa";
import styles from "../styles/Accordion.module.css";

export default function FaqSection(props) {

    const [open, setOpen] = useState(false);

    const Toggle = () => {
      setOpen(!open);
    }

    return (
      <div className={(open ? `${styles.accordionItem} ${styles.open}` : `${styles.accordionItem}`)} onClick={() => Toggle()}>
        <div className={styles.accordionItemHeading}>
          <div className={styles.accordionItemButton}>
            <p>{props.question}<FaChevronUp className={styles.arrow} /></p>
          </div>
        </div>
        <div className={styles.accordionItemPanel}>
          <p className={styles.answer}>{props.answer}</p>
        </div>
      </div>
    );
    
  }; 
