import React from 'react'

const BestSellerCard = ({titie, url, review,taka, Newtaka} ) => {
  return (
    <div className="">
                    <div className="">
                        <img src={url} alt="footer_img_1" />
                        <div className='bg-white pl-6'>
                        <p className='text-5xl pt-3 leading-4 text-orange-400'>{review}</p>
                        <h4 className='text-2xl font-semibold '>{titie}</h4> 
                        <div className='flex gap-6 py-1'>
                        <h4 className='text-2xl font-normal text-gray-400'>{taka}</h4> 
                        <h4 className='text-2xl font-normal'>{Newtaka}</h4> 
                        </div>
                        </div>
                    </div>
                </div>
  )
}

export default BestSellerCard
