import PageHeader from '@/components/sheard/PageHeader'
import React from 'react'
import TermsConditions from './_componet/Terms'

const page = () => {
  return (
    <div>
        <PageHeader imge='/asset/terms.png' titile="Terms & Conditions" subtitle='Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.'/>
      <TermsConditions/>
    </div>
  )
}

export default page