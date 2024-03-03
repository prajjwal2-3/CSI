import React from 'react'
import ImagesSliderDemo from './ImgSlider'
import  SparklesPreview  from './Hero'

const Body = () => {
  return (
    <div className='flex justify-center'>
      <div className="w-8/12 sm:m-2 m-2 ">
        <SparklesPreview/>
     <ImagesSliderDemo/>
      </div>
    </div>
  )
}

export default Body
