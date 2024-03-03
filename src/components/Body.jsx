import React from 'react'
import ImagesSliderDemo from './ImgSlider'
import  SparklesPreview  from './Hero'
import Sponser from './Sponser'

const Body = () => {
  return (
    <div className='flex justify-center'>
      <div className="w-8/12 sm:m-2 m-2 ">
        <div className="flex justify-center"><SparklesPreview/></div>
     <ImagesSliderDemo/>
     <div className="flex justify-center"><Sponser/></div>
      </div>
    </div>
  )
}

export default Body
