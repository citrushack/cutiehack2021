import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

import { FiChevronDown } from 'react-icons/fi'
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io'
import { FaRegQuestionCircle } from 'react-icons/fa'

import styles from '../styles/Form.module.css'

export default function CheckInForm() {
  const router = useRouter()
  const [session] = useSession()

  const [isValidEmail, setIsValidEmail] = React.useState(true)

  const [email, setEmail] = React.useState('')
  const [emailConfirm, setEmailConfirm] = React.useState('')
  const [openRace, toggleOpenRace] = React.useState(false)
  const [openGender, toggleOpenGender] = React.useState(false)
  const [race, setRace] = React.useState('Select an option...')
  const [gender, setGender] = React.useState('Select an option...')
  const [options] = React.useState({
    race: [
      'American Indian or Alaska Native',
      'Asian',
      'Black or African American',
      'Hispanic or Latino',
      'Native Hawaiian or Other Pacific Islander',
      'White',
    ],
    gender: ['Male', 'Female', 'Nonbinary', 'Other', 'Prefer not to say'],
  })
  const [school, setSchool] = React.useState('')
  const [major, setMajor] = React.useState('')
  const [grade, setGrade] = React.useState('')
  const [first_time, setFirstTime] = React.useState('')
  const [submit_triggered, triggerSubmit] = React.useState(false)
  const [filled] = React.useState({
    email: false,
    emailConfirm: false,
    race: false,
    gender: false,
    school: false,
    major: false,
    grade: false,
    first_time: false,
  })

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    filled.email = (e.target.value !== '')
    setIsValidEmail(true)
  }

  const handleChangeEmailConfirm = (e) => {
    setEmailConfirm(e.target.value)
    filled.emailConfirm = (e.target.value !== '')
    setIsValidEmail(true)
  }

  const openRaceDropdown = () => {
    if (!openRace && openGender) {
      toggleOpenGender(false)
    }
    toggleOpenRace(!openRace)
  }

  const openGenderDropdown = () => {
    if (openRace && !openGender) {
      toggleOpenRace(false)
    }
    toggleOpenGender(!openGender)
  }

  const selectRace = (e) => {
    toggleOpenRace(false)
    setRace(e)
    filled.race = true
  }

  const selectGender = (e) => {
    toggleOpenGender(false)
    setGender(e)
    filled.gender = true
  }

  const handleChangeSchool = (e) => {
    setSchool(e.target.value)
    filled.school = (e.target.value !== '')
  }

  const handleChangeMajor = (e) => {
    setMajor(e.target.value)
    filled.major = (e.target.value !== '')
  }

  const handleChangeGrade = (e) => {
    setGrade(e.target.value)
    filled.grade = (e.target.value !== '')
  }

  const toggleFirstTime = (e) => {
    setFirstTime(e)
    filled.first_time = true
  }

  const triggerWarning = () => {
    toast(
      'This email will be used for verifying your participation in case we need to double check!',
      {
        id: 'emailWarning',
        icon: '⚠️',
      }
    )
  }

  const submitForm = (name, id) => {
    triggerSubmit(true)
    if (Object.values(filled).every((e) => e)) {
      const data = [name, email, race, gender, school, major, grade, first_time, id]
      sendData(data)
      router.push('/groups/create')
      toast.success('Succesfully checked in!', { id: 'checkInSuccess'})
    } else {
      if (
        filled.email &&
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        )
      ) {
        setIsValidEmail(false)
        toast.error('Please input a valid email.', { id: 'invalidEmailError'})
      } else if (filled.email && filled.emailConfirm && email !== emailConfirm) {
        setIsValidEmail(false)
        toast.error('Emails don\'t match. Please try again.', { id: 'notMatchingEmailsError'})
      }
      else {
        setIsValidEmail(true)
      }
      toast.error('Please fill out all required fields.', { id: 'incompleteFormError'})
    }
  }

  const sendData = async (checkinData) => {
    console.log(checkinData)
    const response = await fetch('/api/checkin/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: checkinData }),
    })
    await response.json()
  }

  return (
    <section>
      <div className={styles.inputWrapper}>
        <div className={styles.inputHeader}>
          Email
          <FaRegQuestionCircle
            onClick={() => triggerWarning()}
            className={styles.trigger}
          />
        </div>
        <input
          className={
            (styles.inputBox && submit_triggered && !filled.email) ||
            !isValidEmail
              ? `${styles.inputBox} ${styles.triggeredBox}`
              : `${styles.inputBox}`
          }
          value={email}
          onChange={handleChangeEmail}
        />
      </div>

      <div className={styles.inputWrapper}>
        <div className={styles.inputHeader}>
          Confirm Email
        </div>
        <input
          className={
            (styles.inputBox && submit_triggered && !filled.emailConfirm) ||
            !isValidEmail
              ? `${styles.inputBox} ${styles.triggeredBox}`
              : `${styles.inputBox}`
          }
          value={emailConfirm}
          onChange={handleChangeEmailConfirm}
        />
      </div>

      <div className={styles.inputWrapper}>
        <div className={styles.inputHeader}>Race</div>
        <div className={styles.dropdown}>
          <div
            className={
              openRace
                ? `${styles.dropdownHeader} ${styles.dropdownSelected}`
                : `${styles.dropdownHeader}` &&
                  submit_triggered &&
                  !filled.race
                ? `${styles.dropdownHeader} ${styles.triggeredBox}`
                : `${styles.dropdownHeader}`
            }
            onClick={() => openRaceDropdown()}
          >
            <div>{race}</div>
            <div>
              <FiChevronDown />
            </div>
          </div>
          <div
            className={
              openRace
                ? `${styles.dropdownContent} ${styles.show}`
                : `${styles.dropdownContent}`
            }
          >
            {options.race
              ? options.race.map((option) => (
                  <div key={option} onClick={() => selectRace(option)}>
                    {option}
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>

      <div className={styles.inputWrapper}>
        <div className={styles.inputHeader}>Gender</div>
        <div className={styles.dropdown}>
          <div
            className={
              openGender
                ? `${styles.dropdownHeader} ${styles.dropdownSelected}`
                : `${styles.dropdownHeader}` &&
                  submit_triggered &&
                  !filled.gender
                ? `${styles.dropdownHeader} ${styles.triggeredBox}`
                : `${styles.dropdownHeader}`
            }
            onClick={() => openGenderDropdown()}
          >
            <div>{gender}</div>
            <div>
              <FiChevronDown />
            </div>
          </div>
          <div
            className={
              openGender
                ? `${styles.dropdownContent} ${styles.show}`
                : `${styles.dropdownContent}`
            }
          >
            {options.gender
              ? options.gender.map((option) => (
                  <div key={option} onClick={() => selectGender(option)}>
                    {option}
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>

      <div className={styles.inputWrapper}>
        <div className={styles.inputHeader}>School</div>
        <input
          className={
            styles.inputBox && submit_triggered && !filled.school
              ? `${styles.inputBox} ${styles.triggeredBox}`
              : `${styles.inputBox}`
          }
          value={school}
          onChange={handleChangeSchool}
        />
      </div>

      <div className={styles.inputWrapper}>
        <div className={styles.inputHeader}>Major</div>
        <input
          className={
            styles.inputBox && submit_triggered && !filled.major
              ? `${styles.inputBox} ${styles.triggeredBox}`
              : `${styles.inputBox}`
          }
          value={major}
          onChange={handleChangeMajor}
        />
      </div>

      <div className={styles.inputWrapper}>
        <div className={styles.inputHeader}>Grade</div>
        <input
          className={
            styles.inputBox && submit_triggered && !filled.grade
              ? `${styles.inputBox} ${styles.triggeredBox}`
              : `${styles.inputBox}`
          }
          value={grade}
          onChange={handleChangeGrade}
        />
      </div>

      <div className={styles.inputWrapper}>
        <div className={styles.inputHeader}>First Time Hacker?</div>
        <div
          className={
            styles.radio && submit_triggered && !filled.first_time
              ? `${styles.radio} ${styles.triggered}`
              : `${styles.radio}`
          }
          onClick={() => toggleFirstTime(true)}
        >
          {first_time === true ? <IoMdRadioButtonOn /> : <IoMdRadioButtonOff />}
          Yes
        </div>
        <div
          className={
            styles.radio && submit_triggered && !filled.first_time
              ? `${styles.radio} ${styles.triggered}`
              : `${styles.radio}`
          }
          onClick={() => toggleFirstTime(false)}
        >
          {first_time === false ? (
            <IoMdRadioButtonOn />
          ) : (
            <IoMdRadioButtonOff />
          )}
          No
        </div>
      </div>

      <motion.button
        aria-label="Check In Button"
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.997 }}
        transition={{ ease: 'easeInOut', duration: 0.015 }}
        className={styles.button}
        onClick={() => submitForm(session.user.name, session.user.id)}
      >
        Submit
      </motion.button>
    </section>
  )
}
