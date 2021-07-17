import React from 'react'
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast'
import { FiChevronDown } from 'react-icons/fi'
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io'
import { FaRegQuestionCircle } from 'react-icons/fa'

import formStyles from '../styles/Form.module.css'

export default function CheckInForm(props) {
  const router = useRouter()

  const [error, setError] = React.useState(false)
  const [validEmail, setValidEmail] = React.useState(true)

  const [email, setEmail] = React.useState('')
  const [open_race, toggleOpenRace] = React.useState(false)
  const [open_gender, toggleOpenGender] = React.useState(false)
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
    gender: [
      'Male',
      'Female',
      'Nonbinary',
      'Other',
      'Prefer not to say',
    ]
  })
  const [school, setSchool] = React.useState('')
  const [major, setMajor] = React.useState('')
  const [grade, setGrade] = React.useState('')
  const [first_time, setFirstTime] = React.useState('')
  const [submit_triggered, triggerSubmit] = React.useState(false)
  const [filled] = React.useState({
    email: false,
    race: false,
    gender: false,
    school: false,
    major: false,
    grade: false,
    first_time: false,
  })

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    filled.email = e.target.value !== ''
    setValidEmail(true)
  }

  const openRaceDropdown = () => {
    if (!open_race && open_gender) {
      toggleOpenGender(false)
    }
    toggleOpenRace(!open_race)
  }
  
  const openGenderDropdown = () => {
    if (open_race && !open_gender) {
      toggleOpenRace(false)
    }
    toggleOpenGender(!open_gender)
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
  
  const toggleFirstTime = (e) => {
    setFirstTime(e)
    filled.first_time = true
  }

  const triggerWarning = () => {
    setError(true)
    toast('This email will be used for verifying your participation in case we need to double check!', {
      icon: '⚠️',
    });
  }
  
  const submitForm = (name) => {
    triggerSubmit(true)
    if (Object.values(filled).every(e => e)) {
      setError(false)
      const data = [
        name,
        email,
        race,
        gender,
        school,
        major,
        grade,
        first_time,
      ]
      // uncomment when you want to write to db
      // sendData(data)
      router.push('/groups/create')
      toast.success('Succesfully checked in!')
    } else {
      setError(true)
      if (filled.email && !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
        setValidEmail(false)
        toast.error('Please input a valid email.')
      }
      else {
        setValidEmail(true)
      }
      toast.error('Please fill out all required fields.')
    }
  }
  
  const sendData = async (checkinData) => {
    console.log(checkinData)
    const response = await fetch('/api/checkin/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ checkin_data: checkinData }),
    })
    const data = await response.json()
    console.log(data.checkin_data)
    return data.checkin_data
  }

  return (
    <section>
      { error 
        ? <div><Toaster /></div>
        : null
      }
      <div className={formStyles.inputWrapper}>
        <div className={formStyles.inputHeader}>
          Email 
          <FaRegQuestionCircle 
            onClick={() => triggerWarning()}
            className={formStyles.trigger} 
          />
        </div>
        <input
          type="email"
          className={
            formStyles.inputBox && submit_triggered && !filled.email || !validEmail
              ? `${formStyles.inputBox} ${formStyles.triggeredBox}`
              : `${formStyles.inputBox}`
          }
          value={email}
          onChange={handleChangeEmail}
        />
      </div>

      <div className={formStyles.inputWrapper}>
        <div className={formStyles.inputHeader}>Race</div>
        <div className={formStyles.dropdown}>
          <div
            className={
              open_race
                ? `${formStyles.dropdownHeader} ${formStyles.dropdownSelected}`
                : `${formStyles.dropdownHeader}` &&
                  submit_triggered &&
                  !filled.race
                ? `${formStyles.dropdownHeader} ${formStyles.triggeredBox}`
                : `${formStyles.dropdownHeader}`
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
              open_race
                ? `${formStyles.dropdownContent} ${formStyles.show}`
                : `${formStyles.dropdownContent}`
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

      <div className={formStyles.inputWrapper}>
        <div className={formStyles.inputHeader}>Gender</div>
        <div className={formStyles.dropdown}>
          <div
            className={
              open_gender
                ? `${formStyles.dropdownHeader} ${formStyles.dropdownSelected}`
                : `${formStyles.dropdownHeader}` &&
                  submit_triggered &&
                  !filled.gender
                ? `${formStyles.dropdownHeader} ${formStyles.triggeredBox}`
                : `${formStyles.dropdownHeader}`
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
              open_gender
                ? `${formStyles.dropdownContent} ${formStyles.show}`
                : `${formStyles.dropdownContent}`
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

      <div className={formStyles.inputWrapper}>
        <div className={formStyles.inputHeader}>School</div>
        <input
          className={
            formStyles.inputBox && submit_triggered && !filled.school
              ? `${formStyles.inputBox} ${formStyles.triggeredBox}`
              : `${formStyles.inputBox}`
          }
          value={school}
          onChange={handleChangeSchool}
        />
      </div>

      <div className={formStyles.inputWrapper}>
        <div className={formStyles.inputHeader}>Major</div>
        <input
          className={
            formStyles.inputBox && submit_triggered && !filled.major
              ? `${formStyles.inputBox} ${formStyles.triggeredBox}`
              : `${formStyles.inputBox}`
          }
          value={major}
          onChange={handleChangeMajor}
        />
      </div>

      <div className={formStyles.inputWrapper}>
        <div className={formStyles.inputHeader}>Grade</div>
        <input
          className={
            formStyles.inputBox && submit_triggered && !filled.grade
              ? `${formStyles.inputBox} ${formStyles.triggeredBox}`
              : `${formStyles.inputBox}`
          }
          value={grade}
          onChange={handleChangeGrade}
        />
      </div>

      <div className={formStyles.inputWrapper}>
        <div className={formStyles.inputHeader}>First Time Hacker?</div>
        <div
          className={
            formStyles.radio && submit_triggered && !filled.first_time
              ? `${formStyles.radio} ${formStyles.triggered}`
              : `${formStyles.radio}`
          }
          onClick={() => toggleFirstTime(true)}
        >
          {first_time === true ? (
            <IoMdRadioButtonOn />
          ) : (
            <IoMdRadioButtonOff />
          )}
          Yes
        </div>
        <div
          className={
            formStyles.radio && submit_triggered && !filled.first_time
              ? `${formStyles.radio} ${formStyles.triggered}`
              : `${formStyles.radio}`
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

      <div
        className={formStyles.button}
        onClick={() => submitForm(props.name)}
      >
        Submit
      </div>
    </section>
  )
}
