import React, { Component } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io'

import styles from '../styles/Index.module.css'
import formStyles from '../styles/Form.module.css'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      error_msg: '',
      open_race_dropdown: false,
      open_gender_dropdown: false,
      race: 'Select an option...',
      gender: 'Select an option...',
      race_options: [
        'American Indian or Alaska Native',
        'Asian',
        'Black or African American',
        'Hispanic or Latino',
        'Native Hawaiian or Other Pacific Islander',
        'White',
      ],
      gender_options: [
        'Male',
        'Female',
        'Nonbinary',
        'Other',
        'Prefer not to say',
      ],
      school: '',
      major: '',
      grade: '',
      first_time: '',
      submit_triggered: false,
      race_filled: false,
      gender_filled: false,
      school_filled: false,
      major_filled: false,
      grade_filled: false,
      first_time_filled: false,
    }
    this.handleChangeSchool = this.handleChangeSchool.bind(this)
    this.handleChangeMajor = this.handleChangeMajor.bind(this)
    this.handleChangeGrade = this.handleChangeGrade.bind(this)
  }

  openRaceDropdown() {
    if (this.state.open_gender_dropdown && !this.state.open_race_dropdown) {
      this.setState({ open_gender_dropdown: false })
    }
    this.setState({ open_race_dropdown: !this.state.open_race_dropdown })
  }

  openGenderDropdown() {
    if (this.state.open_race_dropdown && !this.state.open_gender_dropdown) {
      this.setState({ open_race_dropdown: false })
    }
    this.setState({ open_gender_dropdown: !this.state.open_gender_dropdown })
  }

  selectRace(e) {
    this.setState({ open_race_dropdown: false })
    this.setState({ race: e })
    this.setState({ race_filled: true })
  }

  selectGender(o) {
    this.setState({ open_gender_dropdown: false })
    this.setState({ gender: o })
    this.setState({ gender_filled: true })
  }

  handleChangeSchool(e) {
    this.setState({ school: e.target.value })
    if (e.target.value !== '') {
      this.setState({ school_filled: true })
    } else {
      this.setState({ school_filled: false })
    }
  }

  handleChangeMajor(e) {
    this.setState({ major: e.target.value })
    if (e.target.value !== '') {
      this.setState({ major_filled: true })
    } else {
      this.setState({ major_filled: false })
    }
  }

  handleChangeGrade(e) {
    this.setState({ grade: e.target.value })
    if (e.target.value !== '') {
      this.setState({ grade_filled: true })
    } else {
      this.setState({ grade_filled: false })
    }
  }

  toggleFirstTime(e) {
    this.setState({ first_time: e })
    this.setState({ first_time_filled: true })
  }

  submitForm(name, email) {
    this.setState({ submit_triggered: true })
    if (
      this.state.race !== 'Select an option...' &&
      this.state.gender !== 'Select an option...' &&
      this.state.school !== '' &&
      this.state.major !== '' &&
      this.state.grade !== '' &&
      this.state.first_time !== ''
    ) {
      this.setState({ error_msg: '' })
      const data = [
        name,
        email,
        this.state.race,
        this.state.gender,
        this.state.school,
        this.state.major,
        this.state.grade,
        this.state.first_time,
      ]
      this.sendData(data)
    } else {
      this.setState({ error_msg: 'Please fill out all required fields.' })
    }
  }

  async sendData(checkinData) {
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

  render() {
    const {
      error_msg,
      open_race_dropdown,
      open_gender_dropdown,
      race,
      race_options,
      gender,
      gender_options,
      school,
      major,
      grade,
      first_time,
      submit_triggered,
      race_filled,
      gender_filled,
      school_filled,
      major_filled,
      grade_filled,
      first_time_filled,
    } = this.state

    return (
      <section>
        <div className={formStyles.errorMsg}>{error_msg}</div>
        <div className={formStyles.inputWrapper}>
          <div className={formStyles.inputHeader}>Race</div>
          <div className={formStyles.dropdown}>
            <div
              className={
                open_race_dropdown
                  ? `${formStyles.dropdownHeader} ${formStyles.dropdownSelected}`
                  : `${formStyles.dropdownHeader}` &&
                    submit_triggered &&
                    !race_filled
                  ? `${formStyles.dropdownHeader} ${formStyles.triggeredBox}`
                  : `${formStyles.dropdownHeader}`
              }
              onClick={() => this.openRaceDropdown()}
            >
              <div>{race}</div>
              <div>
                <FiChevronDown />
              </div>
            </div>
            <div
              className={
                open_race_dropdown
                  ? `${formStyles.dropdownContent} ${styles.selected}`
                  : `${formStyles.dropdownContent}`
              }
            >
              {race_options
                ? race_options.map((option) => (
                    <div key={option} onClick={() => this.selectRace(option)}>
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
                open_gender_dropdown
                  ? `${formStyles.dropdownHeader} ${formStyles.dropdownSelected}`
                  : `${formStyles.dropdownHeader}` &&
                    submit_triggered &&
                    !gender_filled
                  ? `${formStyles.dropdownHeader} ${formStyles.triggeredBox}`
                  : `${formStyles.dropdownHeader}`
              }
              onClick={() => this.openGenderDropdown()}
            >
              <div>{gender}</div>
              <div>
                <FiChevronDown />
              </div>
            </div>
            <div
              className={
                open_gender_dropdown
                  ? `${formStyles.dropdownContent} ${styles.selected}`
                  : `${formStyles.dropdownContent}`
              }
            >
              {gender_options
                ? gender_options.map((option) => (
                    <div key={option} onClick={() => this.selectGender(option)}>
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
              formStyles.inputBox && submit_triggered && !school_filled
                ? `${formStyles.inputBox} ${formStyles.triggeredBox}`
                : `${formStyles.inputBox}`
            }
            value={school}
            onChange={this.handleChangeSchool}
          />
        </div>

        <div className={formStyles.inputWrapper}>
          <div className={formStyles.inputHeader}>Major</div>
          <input
            className={
              formStyles.inputBox && submit_triggered && !major_filled
                ? `${formStyles.inputBox} ${formStyles.triggeredBox}`
                : `${formStyles.inputBox}`
            }
            value={major}
            onChange={this.handleChangeMajor}
          />
        </div>

        <div className={formStyles.inputWrapper}>
          <div className={formStyles.inputHeader}>Grade</div>
          <input
            className={
              formStyles.inputBox && submit_triggered && !grade_filled
                ? `${formStyles.inputBox} ${formStyles.triggeredBox}`
                : `${formStyles.inputBox}`
            }
            value={grade}
            onChange={this.handleChangeGrade}
          />
        </div>

        <div className={formStyles.inputWrapper}>
          <div className={formStyles.inputHeader}>First Time Hacker?</div>
          <div
            className={
              formStyles.radio && submit_triggered && !first_time_filled
                ? `${formStyles.radio} ${formStyles.triggered}`
                : `${formStyles.radio}`
            }
            onClick={() => this.toggleFirstTime(true)}
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
              formStyles.radio && submit_triggered && !first_time_filled
                ? `${formStyles.radio} ${formStyles.triggered}`
                : `${formStyles.radio}`
            }
            onClick={() => this.toggleFirstTime(false)}
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
          onClick={() => this.submitForm(this.props.name, this.props.email)}
        >
          Submit
        </div>
      </section>
    )
  }
}
