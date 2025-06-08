import PageHeader from '@/components/sheard/PageHeader'
import React from 'react'
import Blog_deatails from '../_component/Blog_deatails'

const page = () => {
  return (
    <div>
        <PageHeader imge='/asset/banner1.png' titile="Privacy Policy" subtitle='Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.'/>
        <Blog_deatails/>
    </div>
  )
}

export default page