import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'

const HomePage = () => {
    const [isRateLimited, setIsRateLimited] = useState(false)
  return (
    <div className='min-h-screen'>
      <Navbar />
    </div>
  )
}

export default HomePage
