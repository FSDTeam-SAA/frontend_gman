import PageHeader from '@/components/sheard/PageHeader'
import React from 'react'
import MissionTableFresh from './_component/MissionTableFresh'

const page = () => {
  return (
    <div>
      <PageHeader
        titile="Our Mission"
        subtitle="We are committed to providing the best service possible, ensuring customer satisfaction and continuous improvement."
        imge="/asset/missionheader.jpg"
      />
      <MissionTableFresh/>
    </div>
  )
}

export default page