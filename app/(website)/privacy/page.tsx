import PageHeader from '@/components/sheard/PageHeader'
import React from 'react'
import PrivacyPolicy from './_component/Privacy_Policy'

const page = () => {
  return (
    <div>
        <PageHeader imge='/asset/privacy.png' titile="Privacy Policy " subtitle='Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.'/>
        <PrivacyPolicy/>
    </div>
  )
}

export default page