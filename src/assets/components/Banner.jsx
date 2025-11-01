import React from 'react'
import Button1 from './Button1'

const Banner = () => {
  return (
    <>
      <section id="banner" className='py-28'>
        <div className="container">
            <div className="flex justify-between items-center">
                <div className="max-w-md text-black font-popins">
                    <h1 className="w-md text-6xl leading-22 font-semibold">Find The Best Fashion Style For You</h1>
                    <p className='text-lg pt-9 pb-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. </p>
                    <div className=''>
                    <Button1 title="Shop Now"/>
                    </div>
                </div>
                <div className="banner_img">
                    <img className='w-full' src="/banner_img.png" alt="banner_img" />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Banner

