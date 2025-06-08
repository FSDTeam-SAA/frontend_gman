import PageHeader from '@/components/sheard/PageHeader'
import React from 'react'
import Blog from './_component/Blog'

const page = () => {
  return (
    <div>
        <PageHeader imge='/asset/banner1.png' titile="Our Blog" subtitle='Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.'/>
       <Blog/>
    </div>
  )
}

export default page