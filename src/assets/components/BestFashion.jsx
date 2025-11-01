import React from 'react'

const BestFashion = () => {
  return (
    <>
      <section id="best_fashion" className='pb-24 pt-32'>
        <div className="container relative">
          <div>
            <img src="/Group-3.png" alt="Group-3" className='absolute -top-13 right-1/2 -z-1' />
          </div>
            <div className='grid grid-cols-2 gap-32'>
                <div>
                    <img src="/fashion_since.png" alt="fashion_since" className='w-full' />
                </div>
                <div className="w-md text-black font-popins">
                    <h2 className='text-6xl font-bold leading-20'>Best Fashion Since 2010</h2>
                    <p className='text-2xl font-semibold pt-16 pb-32'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. </p>
                </div>
                    <div className="counter">
                        <ul className='flex justify-around gap-20 text-center bg-amber-100 pl-10 pr-20 pt-20 pb-16 rounded-2xl absolute right-40 -bottom-16 -z-1'>
                            <li><a href="#"><h2 className='text-6xl font-bold text-center'>2010</h2><p className='text-2xl font-medium pt-6'>Founded</p></a></li>
                            <li><a href=""></a><h2 className='text-6xl font-bold text-center'>5000+</h2><p className='text-2xl font-medium pt-6'>product Sold</p></li>
                            <li><a href=""></a><h2 className='text-6xl font-bold text-center'>4500+</h2><p className='text-2xl font-medium pt-6'>Best Reviews</p></li>
                        </ul>
                    </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default BestFashion
