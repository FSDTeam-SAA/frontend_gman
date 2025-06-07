import PageHeader from '@/components/sheard/PageHeader'
import React from 'react'
import Aboutus from './_component/Aboutus'

function Page() {
  return (
    <div className=''>
        <PageHeader imge='/asset/aboutheader.jpg' titile="About Us" subtitle='Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.'/>
     <Aboutus/>
    </div>
  )
}

export default Page