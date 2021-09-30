import React from 'react'
import Image from 'next/image'
import slice from '../public/assets/slice.png'

import styles from '../styles/Faq.module.css'

export default function Faq() {
  const faq = [
    {
      question: 'What is a hackathon?',
      answer: 'A hackathon is an event where teams or inviduals rush to make a creative project. Throughout, there will be free workshops intended to guide you in creating your project. At the end of the time slot, contestants have the opportunity to demo their projects to judges and win prizes.'
    },
    {
      question: 'Where will we submit?',
      answer: 'You can submit through Devpost. Further instructions will follow on the day-of the event.'
    },
    {
      question: 'Can I submit a project I\'ve already worked on?',
      answer: 'No, you must start working on project code after hacking starts at 8 AM. Projects started before that time or have been submitted to other hackathons will be disqualified. Make sure your submission is unique to Cutie Hack!'
    },
    {
      question: 'I\'ve never been to a hackathon before!',
      answer: 'That\'s the best reason to come out! Cutie Hack is open to people of all skill-levels. We\'ll be having beginner-oriented workshops and activities, along with mentors to help you turn your project into reality.'
    },
    {
      question: 'What will I need to participate?',
      answer: 'A working device (i.e your laptop or PC) and a stable internet connection. And, of course, you.'
    },
    {
      question: 'What if I don\'t have a team?',
      answer: 'If you don\'t have a team formed prior to Cutie Hack, we will have a channel on Discord where you can find other participants that share similar interests. We\'ll also be providing activities at the beginning of the event to help you form teams. Teams aren\'t required though, so feel free to work individually.'
    },
    {
      question: 'Do I have to hack or make a project?',
      answer: 'Not at all! You can attend a workshop just to learn, network with fellow hackers, and participate in games and raffles. You\'ll be able to find the schedule on our website as we get closer to the event.'
    },
    {
      question: 'Can I still attend/win a prize if I reside outside the U.S.?',
      answer: 'Those outside of the US can still attend, compete, and win. However, due to shipping restrictions and COVID, we won’t be able to send any physical items to those residing outside of the U.S.'
    }
  ]

  return (
    <section className={styles.section}>
      <div className={styles.wave}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={styles.shapefill}
          ></path>
        </svg>
      </div>
      <div className={styles.mainContent}>
        <h1>got questions?</h1>
        <h3 className={styles.content}>
          Here are the most commonly asked questions by our previous hackers. If
          you don&#39;t see your question here feel free to ask us anything via
          email at citrushack@gmail.com.
        </h3>
        <div className={styles.faq}>
          {faq.map(({ question, answer }, idx) =>
            <div key={idx} className={styles.questionAnswer}>
              <div className={styles.slice}>
                <Image
                  alt='Cutie Slice'
                  src={slice}
                  width={201}
                  height={135}
                  quality={80}
                  layout='responsive'
                  objectFit='contain'
                />
              </div>
              <div>
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
