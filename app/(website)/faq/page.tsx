import PageHeader from '@/components/sheard/PageHeader'
import React from 'react'
import Faq from './Faq'

const page = () => {
  return (
    <div>
        <PageHeader imge='/asset/faq.jpg' titile="Questions You Ask Us Often" subtitle='Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.'/>
        <Faq/>
    
    </div>
  )
}

export default page