import React from 'react'
import PrivacyCard from './PrivacyCard'

export default function PrivacyPolicy() {
  return (
    <div>
      <PrivacyCard
        head="Data Security"
        paragraph="We prioritize the protection of your personal data using advanced security measures."
      />

      <PrivacyCard
        head="Information Collection"
        paragraph="We collect only the information necessary to improve your experience and provide quality services."
      />

      <PrivacyCard
        head="User Consent"
        paragraph="Your data is processed only after receiving your explicit consent."
      />

      <PrivacyCard
        head="Third-Party Sharing"
        paragraph="We do not share your personal data with third parties without your permission."
      />

      <PrivacyCard
        head="Policy Updates"
        paragraph="Our privacy policy is regularly updated to comply with legal requirements and user needs."
      />
    </div>
  )
}
