import React, { useState, useEffect } from 'react'
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

  const [isMobile, setIsMobile] = useState(false)
  var buttonVariants = {}
  if (!isMobile)
    buttonVariants = {
      hover: { scale: 1.02 },
      tap: { scale: 0.997 },
    }

  const [isValidEmail, setIsValidEmail] = useState(true)

  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')
  const [openRace, toggleOpenRace] = useState(false)
  const [openGender, toggleOpenGender] = useState(false)
  const [race, setRace] = useState('Select an option...')
  const [gender, setGender] = useState('Select an option...')
  const [options] = useState({
    race: [
      'American Indian or Alaska Native',
      'Asian',
      'Black or African American',
      'Hispanic or Latino',
      'Native Hawaiian or Other Pacific Islander',
      'White',
      'Other',
      'Prefer not to say',
    ],
    gender: ['Male', 'Female', 'Nonbinary', 'Other', 'Prefer not to say'],
    grade: [
      'High School',
      'Freshman',
      'Sophomore',
      'Junior',
      'Senior',
      'International'
    ]
  })
  const [school, setSchool] = useState('')
  const [major, setMajor] = useState('')
  const [grade, setGrade] = useState('')
  const [first_time, setFirstTime] = useState('')
  const [grad, setGrad] = useState('')
  const [submit_triggered, triggerSubmit] = useState(false)
  const [filled] = useState({
    email: false,
    emailConfirm: false,
    race: false,
    gender: false,
    school: false,
    major: false,
    grade: false,
    first_time: false,
    grad: false,
  })

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    filled.email = e.target.value !== ''
    setIsValidEmail(true)
  }

  const handleChangeEmailConfirm = (e) => {
    setEmailConfirm(e.target.value)
    filled.emailConfirm = e.target.value !== ''
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
    filled.school = e.target.value !== ''
  }

  const handleChangeMajor = (e) => {
    setMajor(e.target.value)
    filled.major = e.target.value !== ''
  }

  const handleChangeGrade = (e) => {
    setGrade(e.target.value)
    filled.grade = e.target.value !== ''
  }

  const toggleGrade = (e) => {
    setGrade(e)
    filled.grade = true
  }

  const toggleFirstTime = (e) => {
    setFirstTime(e)
    filled.first_time = true
  }

  const toggleGrad = (e) => {
    setGrad(e)
    filled.grad = true
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
    const allFieldsFilled = Object.values(filled).every((e) => e)
    const validEmailEntry =
      filled.email &&
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    const matchingEmails =
      filled.email && filled.emailConfirm && email === emailConfirm

    if (!allFieldsFilled) {
      toast.error('Please fill out all required fields.', {
        id: 'incompleteFormError',
      })
    }
    if (!validEmailEntry) {
      setIsValidEmail(false)
      toast.error('Please input a valid email.', { id: 'invalidEmailError' })
    }
    if (!matchingEmails) {
      setIsValidEmail(false)
      toast.error('Emails don\'t match. Please try again.', {
        id: 'notMatchingEmailsError',
      })
    }

    if (allFieldsFilled && validEmailEntry && matchingEmails) {
      const data = [
        name,
        email,
        race,
        gender,
        school,
        major,
        grade,
        first_time,
        grad,
        id,
      ]
      sendData(data)
      sendEmail(email)

      router.push('/')
      toast.success('Succesfully checked in!', { id: 'checkInSuccess' })
    }
  }

  const sendData = async (checkinData) => {
    const response = await fetch('/api/checkin/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: checkinData }),
    })
    await response.json()
  }

  const sendEmail = async (email) => {
    fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: email,
        template_id: 'd-8e97c83d19cf4250bdf9e1f63401a577',
        name: session.user.name,
        members: '',
        invite_code: '',
        newcomer: ''
      })
    });
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <div className={styles.container}>
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
        <div className={styles.inputHeader}>Confirm Email</div>
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
                : `${styles.dropdownHeader}` && submit_triggered && !filled.race
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
        {options.grade.map((option) =>
          <div
            className={
              styles.radio && submit_triggered && !filled.grade
                ? `${styles.radio} ${styles.triggered}`
                : `${styles.radio}`
            }
            onClick={() => toggleGrade(option)}
          >
            {grade === option ? <IoMdRadioButtonOn /> : <IoMdRadioButtonOff />}
            {option}
          </div>
        )}
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

      <div className={styles.inputWrapper}>
        <div className={styles.inputHeader}>Graduated university and/or a graduate student?</div>
        <div
          className={
            styles.radio && submit_triggered && !filled.grad
              ? `${styles.radio} ${styles.triggered}`
              : `${styles.radio}`
          }
          onClick={() => toggleGrad(true)}
        >
          {grad === true ? <IoMdRadioButtonOn /> : <IoMdRadioButtonOff />}
          Yes
        </div>
        <div
          className={
            styles.radio && submit_triggered && !filled.grad
              ? `${styles.radio} ${styles.triggered}`
              : `${styles.radio}`
          }
          onClick={() => toggleGrad(false)}
        >
          {grad === false ? (
            <IoMdRadioButtonOn />
          ) : (
            <IoMdRadioButtonOff />
          )}
          No
        </div>
      </div>

      <motion.button
        aria-label='Submit Button'
        type='button'
        variants={buttonVariants}
        whileHover='hover'
        whileTap='tap'
        transition={{ ease: 'easeInOut', duration: 0.015 }}
        className={styles.button}
        onClick={() => submitForm(session.user.name, session.user.id)}
      >
        Submit
      </motion.button>
    </div>
  )
}
