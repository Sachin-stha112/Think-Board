import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import RateLimitedUI from '../components/RateLimitedUI'

const HomePage = () => {
    const [isRateLimited, setIsRateLimited] = useState(false)
  return (
    <div className='min-h-screen'>
      <Navbar />
      {isRateLimited && <RateLimitedUI/>}
    </div>
  )
}

export default HomePage
