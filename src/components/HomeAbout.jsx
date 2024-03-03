import React from 'react'

const HomeAbout = () => {
  return (
    <div className='bg-gradient-to-r from-violet-800 to-indigo-400 bg-clip-text text-transparent mt-10 relative '>
      About Us
      <div className="absolute inset-x-5 sm:inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-5 sm:inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-16 sm:inset-x-38 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-16 sm:inset-x-38  bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
    </div>
  )
}

export default HomeAbout
