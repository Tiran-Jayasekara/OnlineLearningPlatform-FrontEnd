import PageHeader from '@/components/pageHeader'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-wrap md:mt-0 mt-6 w-full mx-auto justify-center mb-20 bg-gradient-to-br from-white to-white " style={{
      backgroundImage: "url('')",
    }}>
      <PageHeader
        topic="Home"
        header="Well Come To  Online Learning Platform."
        description="Learn Anything You Need"
      />

      <div className="w-full">
        <Image width={500} height={500}
          src="/assests/online.jpg"
          className="w-full  mt-2 md:h-screen h-60"

        />
      </div>
    </div>
  )
}

export default Home