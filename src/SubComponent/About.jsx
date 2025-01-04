import React from 'react'
import AboutCard from './AboutCard'

export default function About() {
  return (
    <div className='container mt-5'>
      <AboutCard
        quotes="Innovation distinguishes between a leader and a follower."
        paragraph="We strive to bring innovative solutions to everyday problems, focusing on creativity and efficiency."
        subhead="Innovation"
      />
      <AboutCard
        quotes="Customer satisfaction is not just a goal, it's our mission."
        paragraph="Our top priority is ensuring our customers' needs are met with quality service."
        subhead="Customer Focus"
      />

      <AboutCard
        quotes="Simplicity is the ultimate sophistication."
        paragraph="We believe in delivering simple yet effective solutions for complex problems."
        subhead="Simplicity"
      />

      <AboutCard
        quotes="Collaboration breeds success."
        paragraph="Teamwork and collaboration are at the heart of our success story."
        subhead="Teamwork"
      />

      <AboutCard
        quotes="Excellence is not an act, but a habit."
        paragraph="We maintain high standards in every aspect of our work to ensure excellence."
        subhead="Excellence"
      />

      <AboutCard
        quotes="Adaptability is the key to survival."
        paragraph="We stay flexible and adaptive in a constantly changing environment."
        subhead="Adaptability"
      />

    </div>
  )
}
