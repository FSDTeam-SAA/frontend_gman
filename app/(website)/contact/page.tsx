import PageHeader from '@/components/sheard/PageHeader'
import React from 'react'
import ContactFrom from './_component/ContactFrom'

const page = () => {
  return (
    <div>
        <PageHeader imge='/asset/faq.jpg' titile="Contact Us" subtitle='Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.'/>
        <ContactFrom/>
    </div>
  )
}

export default page